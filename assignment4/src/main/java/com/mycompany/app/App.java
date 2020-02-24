package com.mycompany.app;

/**
 * Hello world!
 *
 */

import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;
import javax.xml.ws.Endpoint;

@WebService
@SOAPBinding(style = SOAPBinding.Style.DOCUMENT)
public class TestService {

	@WebMethod
	public String sayHello(String msg){
		return "Hello "+msg;t
	}
	
	public static void main(String[] args){
		Endpoint.publish("https://localhost:8888/testWS", new TestService());
	}
}
