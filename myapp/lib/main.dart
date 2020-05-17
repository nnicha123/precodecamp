import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(
  home:Home()
));

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('my first flutter app'),
        centerTitle: true,
        backgroundColor: Colors.pinkAccent,
      ),
      body: Center(
//        child: Image.asset('assets/space-2.jpg'),
//          child: Icon(
//            Icons.airport_shuttle,
//            color:Colors.lightBlue,
//            size: 50.0,
//          ),
//          child:FlatButton(
//            onPressed: (){
//              print('you clicked me');
//            },
//            child:Text('click me'),
//            color: Colors.redAccent,
//        ),
//            child: RaisedButton.icon(
//                onPressed: (){},
//                icon: Icon(
//                  Icons.mail
//                ),
//                label: Text('mail me'),
//                color: Colors.amber,
//            ),
          child: IconButton(
            onPressed: (){
              print('CLICKED ME');
            },
            icon: Icon(Icons.alternate_email),
            color:Colors.amber
          ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: (){},
        child: Text('click'),
        backgroundColor: Colors.pink,
      ),
    );
  }
}

