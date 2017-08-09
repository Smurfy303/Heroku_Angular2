import { Component, OnInit } from '@angular/core';
// import { CHART_DIRECTIVES } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent{
  

  //Code for Bar Chart
    barshow:Boolean=false; paishow:Boolean=false;nutshow:Boolean = false;polshow:Boolean=false;
    radarshow:Boolean=false;lineshow:Boolean=false;

    public barChartOptions:any = {
      scaleShowVerticalLines: false,
      responsive: true
    };
    public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012','2013','2014','2015','2016','2017'];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;

    public barChartData:any[] = [
      {data: [90, 55, 80, 81, 56, 55, 40, 35, 10, 65, 78, 88], label: 'Series A'},
      {data: [28, 48, 40, 19, 86, 27, 90, 25, 65, 54, 66, 20], label: 'Series B'}
    ];

    // events
    public barClicked(e:any):void {
      console.log(e);
    }

    public barHovered(e:any):void {
      console.log(e);
    }
    
    barChart(){
        this.barshow = true;
        this.paishow=false;
        this.nutshow = false;
        this.polshow = false;
        this.radarshow = false;
        this.lineshow = false;
    }

    //Code for pie Chart
    public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
    public pieChartData:number[] = [300, 500, 100];
    public pieChartType:string = 'pie';

      // events
    public pieClicked(e:any):void {
        console.log(e);
    }

    public pieHovered(e:any):void {
        console.log(e);
    }

    pieChart(){
        this.paishow=true;
        this.barshow=false;
        this.nutshow = false;
        this.polshow = false;
        this.radarshow = false;
        this.lineshow = false;
    }

    //code for doughnutChart 
    public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    public doughnutChartData:number[] = [350, 450, 100];
    public doughnutChartType:string = 'doughnut';

    // events
    public doChartClicked(e:any):void {
      console.log(e);
    }

    public doChartHovered(e:any):void {
      console.log(e);
    }

    doughnutChart(){
      this.nutshow = true;
      this.paishow=false;
      this.barshow=false;
      this.polshow = false;
      this.radarshow = false;
      this.lineshow = false;
    }

    //Code for Polar Chart
    public polarAreaChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
    public polarAreaChartData:number[] = [300, 500, 100, 40, 120];
    public polarAreaLegend:boolean = true;

    public polarAreaChartType:string = 'polarArea';

    // events
    public polarChartClicked(e:any):void {
      console.log(e);
    }

    public polarChartHovered(e:any):void {
      console.log(e);
    }

    polarChart(){
      this.polshow = true;
      this.nutshow = false;
      this.paishow=false;
      this.barshow=false;
      this.radarshow = false;
      this.lineshow = false;
    }

    //Code for Radar Chart
    public radarChartLabels:string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

    public radarChartData:any = [
      {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
      {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
    ];
    public radarChartType:string = 'radar';

    // events
    public radarChartClicked(e:any):void {
      console.log(e);
    }

    public radarChartHovered(e:any):void {
      console.log(e);
    }

     radarChart(){
      this.radarshow = true; 
      this.polshow = false;
      this.nutshow = false;
      this.paishow=false;
      this.barshow=false;
      this.lineshow = false;
    }

    //Code for Line Chart
     public lineChartData:Array<any> = [
        {data: [65, 59, 80, 81, 56, 55.75, 40], label: 'Series A'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
        {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
    ];
      public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      public lineChartOptions:any = {
        responsive: true
      };
    
    public lineChartLegend:boolean = true;
    public lineChartType:string = 'line';

    public randomize():void {
      let _lineChartData:Array<any> = new Array(this.lineChartData.length);
      for (let i = 0; i < this.lineChartData.length; i++) {
        _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
        for (let j = 0; j < this.lineChartData[i].data.length; j++) {
          _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
        }
      }
      this.lineChartData = _lineChartData;
    }

    // events
    public lineChartClicked(e:any):void {
      console.log(e);
    }

    public lineChartHovered(e:any):void {
      console.log(e);
    }

    lineChart(){
      this.lineshow = true;
      this.radarshow = false; 
      this.polshow = false;
      this.nutshow = false;
      this.paishow=false;
      this.barshow=false;
    }

}
