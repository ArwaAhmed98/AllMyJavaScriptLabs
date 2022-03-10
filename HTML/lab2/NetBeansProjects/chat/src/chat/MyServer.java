/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package chat;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

/**
 *
 * @author elari
 */
public class MyServer {
       ServerSocket  myServerSocket;
    public MyServer() throws Exception
    {
        try {
            myServerSocket = new ServerSocket(5005);
            while (true) {
                Socket s = myServerSocket.accept();
                new ChatHandler(s);
            }
        }catch (IOException e)
        {
            e.getMessage();
        }
    }
    public static void main(String[] args) {

        try {
            new MyServer();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
