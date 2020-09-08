export default function kiteSize(weight,knots,gust){
   
    var wind=knots
    if ((gust-knots)<=2) {
       wind= knots + ((gust-knots)*0.25)
    }
    else if ((gust-knots)<=6 && (gust-knots)>2) {
        wind =knots + ((gust-knots)*0.3)
    }
    else if ((gust-knots)<=10 && (gust-knots)>6) {
        wind = knots + ((gust-knots)*0.35)
    }
    else if ( (gust-knots)>10) {
        wind = knots + ((gust-knots)*0.5)
    }
   
    if (wind>=34 || wind<=12){
        return 'N/A'
    }
    else {
        var size= Math.round(((2.175*weight)/wind))
        if (size<5 || size >20){
            return 'N/A'
        }
        else {
            return size
        }
    }

}