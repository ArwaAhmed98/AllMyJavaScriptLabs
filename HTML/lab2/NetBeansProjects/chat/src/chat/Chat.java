/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package chat;

import java.io.DataInputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.net.Socket;
import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextArea;
import javafx.scene.control.TextField;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.FlowPane;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;

/**
 *
 * @author elari
 */
public class Chat extends Application {
    
 BorderPane root;
    TextArea chatArea;
    Label wMassage;
    TextField massage;
    Button send;
    FlowPane myform;
    Socket mySocket;
    DataInputStream display;
    PrintStream  sender;
    public  void init()  {
        root = new BorderPane();
        chatArea = new TextArea();
        wMassage = new Label("write your massage");
        massage = new TextField();
        send = new Button("Send");
        try {
            mySocket = new Socket("127.0.0.1", 5005);
            display =  new DataInputStream(mySocket.getInputStream());
            sender = new PrintStream(mySocket.getOutputStream());
        }catch (Exception e)
        {
            e.getMessage();
        }

        new Thread(new Runnable() {
            @Override
            public void run() {
                while(true){
                    String replymsg;
                    try{
                        replymsg =display.readLine();
                        System.out.println(replymsg);
                        chatArea.appendText("\n"+replymsg);
                    }catch (Exception e){e.getMessage();}
                }
            }
        }).start();



    }
    @Override
    public void start(Stage stage) throws IOException {
        send.setDefaultButton(true);
        chatArea.setEditable(false);
        myform = new FlowPane(wMassage,massage,send);
        root.setCenter(chatArea);
        root.setBottom(myform);
        massage.setPromptText("write massage..");
        Scene scene = new Scene(root, 380, 240);
        stage.setTitle("ChatRoom!");
        stage.setScene(scene);
        stage.show();
        send.setOnAction(new EventHandler<ActionEvent>() {
            @Override
            public void handle(ActionEvent actionEvent) {
               try {
                   System.out.println(massage.getText());
                   sender.println(massage.getText());
                   massage.setText("");
               }
               catch (Exception e)
               {
                   e.getMessage();
               }
            }
        });


    }


    public static void main(String[] args) {
        launch();
        new Chat();
    }
}
