package com.acme;

import java.io.IOException;
import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.eclipse.jetty.io.Connection;
import org.eclipse.jetty.util.TypeUtil;
import org.eclipse.jetty.util.log.Log;
import org.eclipse.jetty.websocket.WebSocket;
import org.eclipse.jetty.websocket.WebSocket.Outbound;
import org.eclipse.jetty.websocket.WebSocketServlet;

 
public class WebSocketChatServlet extends WebSocketServlet
{
    private final Set<ChatWebSocket> _members = new CopyOnWriteArraySet<ChatWebSocket>();
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
        throws javax.servlet.ServletException ,IOException 
    {
        getServletContext().getNamedDispatcher("default").forward(request,response);
    };
    
    public WebSocket doWebSocketConnect(HttpServletRequest request, String protocol)
    {
        return new ChatWebSocket();
    }
    
    
	class ChatWebSocket implements WebSocket
	{
		Outbound _outbound;
	

		@Override
		public void onConnect(Outbound outbound) {
 			_outbound = outbound;
 			_members.add(this);
		}

		@Override
		public void onDisconnect() {
 			_members.remove(this);
		}

		@Override
		public void onMessage(byte frame, String data) {
 			for(ChatWebSocket member : _members)
 			{
 				try{
 					member._outbound.sendMessage(frame,data);
 				}catch(IOException e){
 					Log.warn(e);
 				}
 			}
		}

		@Override
		public void onMessage(byte arg0, byte[] arg1, int arg2, int arg3) {
 			
		}

		@Override
		public void onFragment(boolean arg0, byte arg1, byte[] arg2, int arg3,
				int arg4) {
			 
			
		}
		
	}
    
    
}
