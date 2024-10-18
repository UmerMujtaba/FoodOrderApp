import { StyleSheet } from "react-native";


export default styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center'
  },

  input: {
    width: '90%',
    padding: 10,
    margin: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: "10%",
  },
  infoText: {
    fontSize: 16,
    marginVertical: 10,
    color: 'red'
  },
  messageText: {
    fontSize: 14,
    color: 'red',
    marginTop: 10,
  },

  callContainer: {
    marginTop: 20,
    alignItems: 'center',
  },


  channelInputContainer: {
    marginBottom: 10,
    backgroundColor: "red"
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },



  toggleButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  toggleButton: {
    flex: 1,
    marginHorizontal: 5, // Space between buttons
  },
  usersListContainer: {
    flex: 1,
    paddingTop: 10,
  },
  userItem: {
    padding: 10,
    backgroundColor: '#e9ecef', // Light background for user list
    borderRadius: 5,
    marginBottom: 10,
  },
  callStatus: {
    fontSize: 18,
    marginBottom: 10,
    color: 'red'
  },
  userStatusText: (colors) => ({
    color:colors.text,
    fontSize: 18,
    marginTop: 20
  })

})