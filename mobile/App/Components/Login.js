const React = require('react-native');
const SearchSoundCloud = require('./SearchSoundCloud.js');

const {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    NavigatorIOS,
    Dimensions,
    StyleSheet
} = React;

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    marginBottom: 10,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

const {width, height} = Dimensions.get('window');

class Login extends React.Component {
<<<<<<< 686bfc56e801be377564f04daa8a86a921eafb1d
    handleSubmit() {
      this.props.navigator.push({
        component: SearchSoundCloud,
        title: 'Search'
=======
    // getInitialState() {
    //     return {
    //         inputValue: {
    //             username: 'username',
    //             password: 'password'
    //         }
    //     }
    // }

    entranceButton(){
      this.props.navigator.push({
        component: SearchBar,
        title: 'Find your Track'
>>>>>>> [refactor]add route from login to SearchBar
      });
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.title}>Access Your Account</Text>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Username"
                    placeholderTextColor="#FFF"/>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Password"
                    placeholderTextColor="#FFF"/>
                <TouchableHighlight
                    style={styles.button}
<<<<<<< 686bfc56e801be377564f04daa8a86a921eafb1d
                    onPress={this.handleSubmit.bind(this)}
=======
                    onPress={this.entranceButton.bind(this)}
>>>>>>> [refactor]add route from login to SearchBar
                    underlayColor="white">
                    <Text style={styles.buttonText}> LOGIN </Text>
                </TouchableHighlight>
            </View>
        );
    }
};

module.exports = Login;
