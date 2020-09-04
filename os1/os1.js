// first we need to create a stage
var stage = new Konva.Stage({
    container: 'container',   // id of container <div>
    width: 1000,
    height: 1000
});

// then create layer
var layer = new Konva.Layer();

var count=0;
var countText = new Konva.Text({
    x:  800,
    y: 300,
    text: 'Count= '+count,
    fontSize: 30,
    fontFamily: 'Calibri',
    fill: 'green',
});



// since this text is inside of a defined area, we can center it using
// align: 'center'
var p1 = new Konva.Text({
    x: 20,
    y: 60,
    text:
        "Process 1\n\n {\n 1. int i=0; \n 2. for(i=0;i<100;i++) \n 3. \t\t count++ \n}",
    fontSize: 18,
    fontFamily: 'Calibri',
    fill: '#000000',
    width: 300,
    padding: 20,
   // align: 'center',
});

var p2 = new Konva.Text({
    x: 340,
    y: 60,
    text:
        "Process 2\n\n {\n 1. int i=0; \n 2. for(i=0;i<100;i++) \n 3. \t\t count++ \n}",
    fontSize: 18,
    fontFamily: 'Calibri',
    fill: '#000000',
    width: 300,
    padding: 20,
    // align: 'center',
});

var status1 = new Konva.Text({
    x:  20,
    y: p1.height()+ 65,
    text: "status=Ready",
    fontSize: 30,
    fontFamily: 'Calibri',
    fill: 'green',
});

var status2 = new Konva.Text({
    x: 350,
    y: p2.height()+ 65,
    text: "status=Ready",
    fontSize: 30,
    fontFamily: 'Calibri',
    fill: 'green',
});

var rect1 = new Konva.Rect({
    x: 20,
    y: 60,
    stroke: '#555',
    strokeWidth: 5,
    fill: '#ddd',
    width: 300,
    height: p1.height(),
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOpacity: 0.2,
    cornerRadius: 10,
});

var rect2 = new Konva.Rect({
    x: 340,
    y: 60,
    stroke: '#555',
    strokeWidth: 5,
    fill: '#ddd',
    width: 300,
    height: p2.height(),
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOpacity: 0.2,
    cornerRadius: 10,
});

// add the shapes to the layer
layer.add(countText);
layer.add(rect1);
layer.add(p1);
layer.add(rect2);
layer.add(p2);
layer.add(status1);
layer.add(status2);


// add the layer to the stage
stage.add(layer);

// draw the image
layer.draw();

var lt=0;

var anim = new Konva.Animation(function(frame) {
    var time = frame.time,
        timeDiff = frame.timeDiff,
        frameRate = frame.frameRate;

    if (time - lt > 3000){
        if(time-lt>6000){
            lt=time;
            count++;
        }
        rect1.stroke('#dd1514');
        rect2.stroke('#555');
        countText.text("count= "+ count);
        status1.fill('green');
        status1.text("Status=Running");
        status2.fill("#f9ce32")
        status2.text("Status=Ready");
    }
    else{
        rect1.stroke('#555');
        rect2.stroke('#dd1514');
        countText.text("count= "+ count);
        status2.text("Status=Running");
        status1.text("Status=Ready");
        status2.fill('green');
        status1.fill('#f9ce32');
    }


}, layer);

anim.start();