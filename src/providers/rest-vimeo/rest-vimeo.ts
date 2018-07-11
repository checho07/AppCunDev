import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';
import vimeo from 'vimeo';
/*
  Generated class for the RestVimeoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestVimeoProvider {

    private apiUrl = 'https://restcountries.eu/rest/v2/all';
    private apiUrl2= 'https://jsonplaceholder.typicode.com/';
    private apiVimeo = 'http://vimeo.com/api/v2/71145243/videos.json';
    private scope =['public','edit'];
    private Vimeo = vimeo.Vimeo;
    private videos: any;
    private client = new this.Vimeo(
                    71145243
                    ,'g7u8Wt1ckgsLkn0B590GC6fFkBMO3FKshon+mD+kOXTpyVPgx1K8kav3s0zD0OaTMs8vnPfOvdFNfcPXzur1pMznktYxZj+VT7IDt+kaatA982aA14nC6R/XcZm/zef9'
                    ,'4f048f366559828214800f6a9865a7c1'
    )

    constructor(public http: HttpClient) {
        console.log('Hello RestProvider Provider');    
    }
    requestVimeo(){
        return new Promise(resolve =>{
            this.client.request(/*options*/{ 
                method:'GET',
                path: '/albums/5232645/videos',
            }, /*callback*/function (error, body, status_code, headers) {
                if(error != undefined) {
                    return resolve(error);
                } else {
                    return resolve(body);
                } 
            });
        })  
    }

    uploadVideo(path){
        
            this.client.upload(
                path.toString(),
                function (uri) {
                    
                  console.log('File upload completed. Your Vimeo URI is:', uri)
                },
                function (bytesUploaded, bytesTotal) {
                  var percentage = (bytesUploaded / bytesTotal * 100).toFixed(2)
                  console.log(bytesUploaded, bytesTotal, percentage + '%')
                },
                function (error) {
                    
                  console.log('Failed because: ' + error)
                }
              )
        

      
    }

}

