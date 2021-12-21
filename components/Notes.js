
/**
 * Sources used and referenced:
 * - https://reactnative.dev/
 * - https://reactnative.dev/docs/scrollview
 * - For box shadows: https://reactnative.dev/docs/shadow-props
 * - For Functionality of the NotesApp: https://www.youtube.com/watch?v=CcSzoxfuO2Q&t=939s
 * - https://codehs.com
 */

 import React, { useState, useCallback } from 'react';
 import {
   ImageBackground,
   Dimensions,
   ScrollView,
   StyleSheet,
   View,
   Text,
   Button,
   Modal,
   TextInput,
   TouchableHighlight,
 } from 'react-native';
 
  //For the dimensions of the layout 
 let deviceWidth = Dimensions.get('window').width;    
 let deviceHeight = Dimensions.get('window').height; 


 const Notes = () => {
  //  Use State Variables
   const [notes, setNotes] = useState([])  
   const [listView, setListView] = useState(false)
   const [isNoteModalOpen, setNoteModalOpen] = useState(false)
   const [text, setText] = useState('');
   const [selectedIndex, setSelectedIndex] = useState(null)

 
  //  This function helps when a user wants to go back and edit their notes, the note will be updated
   const onSaveNote = useCallback(() => { //CallBack will return a memoized version of of the callback that ony changes if the input changes
     if (!text) {
       return;
     }
 
     let copyNotes = [...notes]
 
     //Each note has its own index
     if (selectedIndex !== null) {
       copyNotes[selectedIndex] = text
     } else {
       copyNotes = copyNotes.concat(text)
     }
 
     setNotes(copyNotes)
     setNoteModalOpen(false)
     setSelectedIndex(null)
   }, [text, notes, setNotes])
 
  //  Each note has its own index. If the note is pressed, a full view screen of the note will be displayed
   const onNotePress = (index) => {
     setSelectedIndex(index)
     setText(notes[index])
     setNoteModalOpen(true)
   }
 
  //  let noteStyle = [styles.note] //Attributing notes to a style 
   const textProps = listView ? { numberOfLines: 2 } : {} //If it is in list view -> limiting the number of lines to 2 
  
   return (
    <View style = {styles.container}>
       <ScrollView > 
          <ImageBackground  style= { styles.backgroundImage } source={require('../assets/NotesGradient.png')}>
          <View style = {styles.titleContainer}>
            <Text style = {styles.notesTitle}>NOTES</Text>
          </View>

           {/* SHORTENED VIEW OF NOTES OR FULL VIEW BUTTON */}
           <TouchableHighlight style={[styles.viewChoiceContainer]}>
              <Button
                title = {listView ? "Full View" : "List View"}
                color='pink' 
                onPress={() => setListView(!listView)}
              />
            </TouchableHighlight>

          {/* THIS CONTAINER SHOWS ALL THE NOTES IN A LIST VIEW */}
           <View style={[styles.allNotesContainer, { width: '100%', height: deviceHeight}]}>
             {
               //NOTES ARE BEING MAPPED ONTO THE SCREEN BASED ON THE ORDER OF THEIR INDEX
               notes.map(
                 (note, index) => (
                   <TouchableHighlight key={index} onPress={() => onNotePress(index)}>
                     <View style={styles.note}>
                       <Text {...textProps}>{note}</Text>
                     </View>
                   </TouchableHighlight>
                 )
               )
             }
           </View>
           </ImageBackground>

       </ScrollView>

       <View style={styles.addNoteContainer}>
         <Button
           title="ADD NOTE"
           color='purple' 
           onPress={() => {
             setText('')
             setNoteModalOpen(true)}}/>
       </View>

        {/* BELOW IS THE CODE FOR ADDING/EDITING A NOTE */}
        {/* MUST BE TRUE IN ORDER TO OPEN SECOND WINDOW */}
       <Modal visible={isNoteModalOpen}> 
          <ImageBackground  style= { styles.backgroundImage } source={require('../assets/NotesGradient.png')}>
            <View style={styles.modalHeadingContainer}>
              {/* TITLE AND TEXT INPUT CONTAINER */}
              <Text style={styles.modalTitle}>New Note</Text>

              {/* TEXT INPUT FOR NOTES */}
              <TextInput style = {styles.textInputStyle}
              onChangeText={setText}
              value={text}
              multiline
              />
            </View>

            {/* SAVE AND CANCEL BUTTONS */}
            <View style={styles.SaveCancelContainer}>
              {/* SAVE BUTTON */}
              <View style={styles.buttonStyle}>
                <Button 
                  onPress={onSaveNote} 
                  title={'SAVE'} 
                  color = 'purple'/>
              </View>
              {/* CANCEL BUTTON -> Goes back to the first window showing the list of all the notes*/}
              <View style={styles.buttonStyle}>
                <Button color='red' onPress={() => setNoteModalOpen(false)} title={'Cancel'} />

              </View>
              
            </View>
          </ImageBackground>
        </Modal>
       </View>

   );
 };
 
 const styles = StyleSheet.create({
   container:{
    flex: 1,
   },

   backgroundImage:{
    flex: 1,
    resizeMode: 'stretch',
    justifyContent: "center",
    alignItems: "center",
  },

  titleContainer:{
    height: .2*(deviceHeight/4),
    justifyContent: 'space-evenly',

  },

  notesTitle: {
    fontSize: 30,
    color: '#ffdae7',
    fontFamily: 'Avenir',
    fontWeight:'bold',
    top: 20,
    
  },

   allNotesContainer: {
     padding: 10,
     paddingRight: 20,
     height: 3*(deviceHeight/4),
   },

   note: {
     borderWidth: 1,
     borderColor: '#ddd',
     padding: 10,
     marginBottom: 10,
     borderRadius: 5,
     backgroundColor: '#ddd',
     shadowColor: '#171717',
     shadowOffset: {width: -4, height: 4},
     shadowOpacity: 1.0,
     shadowRadius: 3,
   },

  //  This changes the list view of notes
   viewChoiceContainer: {
    paddingTop: 5,
    paddingRight: 20,
    alignItems: 'flex-start',
    height: .3*(deviceHeight/4),
    top: 25,
    zIndex: 1
   },

   addNoteContainer: {
     bottom: 20,
     right: 20,
     position: 'absolute'
   },
   
   SaveCancelContainer: {
     flexDirection: 'row',
     justifyContent: 'flex-start',
     position: 'absolute',
     bottom: 340,

   },
   buttonStyle: {
     flex: 1,
     width: 400,
     padding: 10,
     margin: 20,
     justifyContent: 'flex-start',

   },
   choiceViewButton: {
    width:100,
    height: 50,
    padding: 10,
    color: 'black',
    backgroundColor: 'pink',
    justifyContent: 'flex-start',
  },
   textInputStyle: {
      width: deviceWidth,
      height: (deviceHeight/3),
      backgroundColor: 'white',
      borderRadius: 30,
      padding: 20,
      fontSize: 20,
      shadowColor: '#171717',
      shadowOffset: {width: -4, height: 4},
      shadowOpacity: 1.0,
      shadowRadius: 3,
   },
   modalTitle: { 
     fontSize: 30, 
     fontWeight: 'bold',
     fontFamily:'Avenir', 
     color: 'white', 
     position: 'absolute', 
     top: -40},

   modalHeadingContainer: {  
     height: 3*(deviceHeight/4),
     alignItems: 'center',
     padding: 20 }
 });
 
 export default Notes;