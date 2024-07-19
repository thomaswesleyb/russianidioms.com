package com.russianidioms.firebase;

public class Application {
    public static void main(String[] args) {
        String firebase_baseUrl = null;

        String firebase_apiKey = null;

        for( String s : args ) {

            if( s == null || s.trim().isEmpty() ) continue;
            String[] split = s.trim().split( "=" );

            if( split[0].equals("baseUrl") ) {
                firebase_baseUrl = split[1];
            }
            else if( split[0].equals("apiKey") ) {
                firebase_apiKey = split[1];
            }

        }

        if( firebase_baseUrl == null || firebase_apiKey == null ) {
            System.out.println("Usage: java -jar russianidioms-firebase-api.jar baseUrl=<firebase_base");
        }



    }
}