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
      body: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Text('hello, world'),
          FlatButton(
            onPressed: (){},
            color: Colors.amber,
            child: Text('click me'),
          ),
          Container(
            color: Colors.cyanAccent,
            padding: EdgeInsets.all(30.0),
            child: Text('inside container'),
          )
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: (){},
        child: Text('click'),
        backgroundColor: Colors.pink,
      ),
    );
  }
}

