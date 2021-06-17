import 'package:flutter/material.dart';
import 'home_page.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  TextEditingController _usernameController = TextEditingController();
  TextEditingController _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Container(
                width: 100,
                height: 100,
                child: Image.asset('assets/images/flutter_logo.jpg')),
            Padding(
              padding: const EdgeInsets.only(
                  right: 50.0, left: 50.0, top: 18, bottom: 18),
              child: TextFormField(
                controller: _usernameController,
                style: TextStyle(color: Colors.black, fontSize: 20),
                cursorColor: Colors.black,
                decoration: InputDecoration(
                  hintText: 'Input Username',
                  border: UnderlineInputBorder(
                      borderSide: BorderSide(color: Colors.black)),
                  focusedBorder: UnderlineInputBorder(
                      borderSide: BorderSide(color: Colors.blue)),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(
                  right: 50.0, left: 50.0, top: 8, bottom: 50),
              child: TextFormField(
                obscureText: true,
                controller: _passwordController,
                style: TextStyle(color: Colors.black, fontSize: 20),
                cursorColor: Colors.black,
                decoration: InputDecoration(
                  hintText: 'Input Password',
                  border: UnderlineInputBorder(
                      borderSide: BorderSide(color: Colors.black)),
                  focusedBorder: UnderlineInputBorder(
                      borderSide: BorderSide(color: Colors.blue)),
                ),
              ),
            ),
            Container(
              width: MediaQuery.of(context).size.width / 1.2,
              height: 50,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(35.0),
                color: Colors.amberAccent,
              ),
              child: MaterialButton(
                onPressed: () {
                  print('Username: ' + _usernameController.text);
                  print('Password: ' + _passwordController.text);
                  Navigator.push(context,
                      MaterialPageRoute(builder: (context) => HomePage()));
                },
                child: Text('Press'),
                // route
              ),
            )
          ],
        ),
      ),
    );
  }
}
