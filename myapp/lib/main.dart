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
        child: Image(
          image: AssetImage('assets/space-3.jpg'),
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

