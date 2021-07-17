import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  screenView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  screenBackground: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    flexDirection: 'column'
  },
  welcomeLogoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  welcomeLogo: {
    width: '60%'
  },
  buttonContainer: {
    flex: 0.5,
  }
})

export default style