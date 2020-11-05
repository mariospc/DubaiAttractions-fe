import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AttractionsService } from '../../services/attractions.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-attraction',
  templateUrl: './update-attraction.component.html',
  styleUrls: ['./update-attraction.component.css']
})
export class UpdateAttractionComponent implements OnInit {

  lat;
  lng;
  title;
  description;
  short_info;
  photo;
  location;
  url;
  objectId;
  message;
  imagePath;
  imgURL;
  mapTypeId = 'terrain';
  constructor(
    private spinner: NgxSpinnerService,
    private attractionsService:AttractionsService,
    private toast: ToastrService,
    private activatedRoute:ActivatedRoute,

  ) {
    this.activatedRoute.paramMap.subscribe(data=>{
      spinner.show();
      const id = data.get('id');      
      this.attractionsService.getAttractionByID(id).subscribe(data =>{         
        
        console.log(data);
        
        this.objectId = data['objectId']                
        this.title = data['title'];
        this.short_info = data['short_info'];
        this.description = data['description'];
        this.url = data['url'];
        
        this.lng = data['location'][0];
        this.lat = data['location'][1];
        // this.photo = data['photo'];
        this.spinner.hide();     
      });    
    });      
   }

  ngOnInit(): void {
    this.imgURL = "https://via.placeholder.com/250x250?text=Up+to+5Mb+image";

  }

  updateAttraction(){    
    
    this.spinner.show();
    const body = {
      attraction_id: this.objectId,
      title: this.title,
      url: this.url,
      colaction: [this.lng, this.lat],
      short_info: this.short_info,
      description: this.description,
      photo: this.photo      
    }
    

    this.attractionsService.updateAttraction(body).subscribe(data =>{
      this.spinner.hide();
      this.toast.success('Attraction updated successfully!');
    },
    (error: HttpErrorResponse) =>{
      this.toast.error('Error on update!');
      this.spinner.hide();
    });
  }

  preview(files) {
    this.message = '';
    if (files.length === 0)
      return;
    if (files[0].size > 5242880 ){
      this.message = "Image has to be less than 5 MB"
      return;
    }
    
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    
    reader.onload = (_event) => {       
      this.photo = reader.result.toString().split(',')[1];
      this.imgURL = reader.result; 
      console.log(reader.result);
      
    }
  }

  discardImage(){
    this.imgURL = "https://via.placeholder.com/250x250?text=Up+to+5Mb+image";
    this.photo = undefined;
  }
}
