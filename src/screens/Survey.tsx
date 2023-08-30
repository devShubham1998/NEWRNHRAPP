import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import RNAnimated from 'react-native-animated-component';
import RNPoll, {IChoice} from 'react-native-poll';

const Survey = () => {
  const choices: Array<IChoice> = [
    {id: 1, choice: 'Nike', votes: 112, color: 'red'},
    {id: 2, choice: 'Adidas', votes: 1, color: 'yellow'},
    {id: 3, choice: 'Puma', votes: 3, color: 'green'},
    {id: 4, choice: 'Reebok', votes: 5, color: 'pink'},
    {id: 5, choice: 'Under Armour', votes: 9, color: 'blue'},
  ];
  const [totalVotes, setVotes]: any = useState('');

  useEffect(() => {
    let total: any = choices.reduce((acc, curr) => {
      return acc + curr.votes;
    }, 0);
    setVotes(total);
    console.log('@@@@ Tottrt=====', total);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View
      style={{
        flex: 1,
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
      }}>
      <Text>Select Your Fav Brand</Text>
      <RNPoll
        // pollItemContainerStyle={{height: 4}}
        fillBackgroundColor={'red'}
        hasBeenVoted={true}
        appearFrom="right"
        animationDuration={550}
        totalVotes={totalVotes}
        choices={choices}
        PollContainer={RNAnimated}
        PollItemContainer={RNAnimated}
        onChoicePress={(selectedChoice: IChoice) =>
          console.log('SelectedChoice: ', selectedChoice)
        }
      />
    </View>
  );
};

export default Survey;
