import * as React from 'react';
import { Button, View, Text,StyleSheet,Image,TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"#6D7B8D" }}>
      <Text style={{fontWeight:"bold",  backgroundColor:"#E0FFFF" ,}}>Book-App </Text>
      <View style={{justifyContent:"center", alignItems:"center"}}>
      <Image source={{
        width:350,
        height:230,
        marginBottom:90,
        padding:90,
        alignItems:"center",
        uri:"https://daisy.org/wp-content/uploads/2018/11/book-dark-enlightenment-1029141-1024x683.jpg"
      }}/>
      
      </View>
      <View>
               <Text>Email :</Text>
                    <TextInput
                        style={{width:"100%", backgroundColor:"#FFC0CB",padding:9,margingBottom:5,}}
                          placeholder="Enter Your Email Address "
                      />
      
      </View>

       <View>
          <Text>Password :</Text>
                <TextInput
                  style={{width:"100%",backgroundColor:"#FFC0CB",padding:9,marginBottom:10,}}
                  secureTextEntry={true}
                   placeholder="Enter your password"
                 />
       </View>
       <View>
       <Text>sign up</Text>
       </View>
      <View style={{flexDirection:"row",width:100,top:100}}>

      <View style={{right:100}}>
      <Button title="create Account" onPress={()=>navigation.navigate('singup')}/>
      </View>
      <View style={{left:25}}>
      <Button 
        title="login"
        onPress={() => navigation.navigate('Details')}
      />
      </View>
      </View>
    </View>
  );
}


function singup ({navigation}){
  return(
    <View style={{backgroundColor:"#C0C0C0",flex: 1, alignItems: 'center', justifyContent: 'center',}} >
    <Text style={{fontSize:15,fontWeight:"bold",}}>Sing Up</Text>
    <View style={{justifyContent:"center",alignItems:"center"}}>
    <Image source={{
      width:300,
      height:200,
      marginBottom:90,
      padding:50,
      alignItems:"center",
      uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDF8HJcXWfavmn9r-MLKsElyRIgt3SGI6D0A&usqp=CAU"
    }}/>
    </View>
    
    <View>
    <Text>Full Name:</Text>
    <TextInput style={{width:"100%",backgroundColor:"#98AFC7",padding:10,marginBottom:10}}
    placeholder="please Enter Your Name"/>
    </View>
    <View>
    <Text>Email Address:</Text>
    <TextInput style={{width:"100%",backgroundColor:"#98AFC7",padding:10,marginBottom:10}}
    placeholder="please Enter your Email"/>
    </View>
    <View>
    <Text>Password :</Text>
    <TextInput style={{ width:"100%",backgroundColor:"#98AFC7",padding:10,marginBottom:10}}
    secureTextEntry={true}
    placeholder="Enter password"/>
    </View>
    <View>
    <Text>Re-Enter Password:</Text>
    <TextInput style={{width:"100%",backgroundColor:"#98AFC7",padding:10,marginBottom:10}}
    secureTextEntry={true}
    placeholder="Re-Enter Password"/>
    </View>
    <View style={{left:100,top:30}}>
     <Button title="Login" onPress={()=> navigation.navigate("Home")}/>
    </View>
    </View>
    
    
  );

}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"#F0FFF0", }}>
      <Text style={{fontWeight:"bold",fontSize:20.7,alignItems: 'center', justifyContent: 'center',}}>Welcome !</Text>
      
      <View style={{left:9,}}>
      <View style={{right:91}}>
      <Text >Celestial Bodies book</Text>
      <Image source={{ width:100,height:100,marginBottom:50,padding:50,
      uri:"https://api.time.com/wp-content/uploads/2019/10/celestial-bodies-1.jpg"
      }}/>
      
      <Button title="More " onPress={()=>navigation.navigate("book")}/>
      </View>


      <View style={{right:90,top:60}}>
      <Text> The Overstory book</Text>
      <Image source={{
        width:100,
        height:100,
        marginBottom:40,padding:40,
        uri:"https://www.ubuy.vn/productimg/?image=aHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzUxRXBNMld1T2lMLl9TUzQwMF8uanBn.jpg"
      }}/>
      <Button title="More" onPress={()=>navigation.navigate("book")}/>
      </View>


      




      <View style={{top:130,backgroundColor:"black",}}>
      <Button 
        title="Log Out"
        onPress={() => navigation.push('Details')}
      />
      </View>
      </View>
    </View>
  );
}
function bookdetails({navigation}){
return(
  <View style={{flex:1,backgroundColor:"#98AFC7"}}>
  <Text style={{fontWeight:"bold",fontSize:30}}> Celestial Bodies book </Text>
  <View style={{justifyContent:"center",alignItems:"center"}}>
  <Image source={{
    width:100,
    height:100,
    marginBottom:50,
    padding:50,
    alignItems:"center",
    justifyContent:"center",
    uri:"https://api.time.com/wp-content/uploads/2019/10/celestial-bodies-1.jpg"
  }}/>
</View>

  <View style={{flexDirection:"row",}}>
  <Text style={{fontWeight:"bold"}}>Auther :</Text>
  <Text> Jokha Alharthi </Text>
  </View>

  <View style={{flexDirection:"row",}}>
  <Text style={{fontWeight:"bold",}}>Description:</Text>
<Text>Arab literature is rising in popularity – not yet soaring, but with Celestial Bodies having just won the Man Booker International Prize 2019, we’re going to be seeing an upwards trajectory that gets steeper and steeper in the months and years to come.As an introduction to Arab literature and anyone looking to explore its riches, Celestial Bodies is a superb choice.Celestial Bodies centres around a family in the Omani village of al-Awafi. Three sisters, Mayya, Asma, and Khawla are growing up, falling in and out of love, and raising children in a time of great cultural, economic, and political shifts in Oman.
</Text>
</View>


  <View style={{flexDirection:"row"}}>
  <Text style={{fontWeight:"bold"}}>Price :</Text>
  <Text style={{alignItems:"center",justifyContent:"center"}}>RS.4500.00</Text>
  </View>

  <Button title="Buy"/>
  
  </View>
);
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="singup" component={singup}/>
        <Stack.Screen name="book" component={ bookdetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
