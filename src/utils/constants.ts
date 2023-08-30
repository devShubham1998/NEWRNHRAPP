import AsyncStorage from "@react-native-async-storage/async-storage";

export type UserDetails = {
  doctorId: number;
  email: string;
  firstName: string;
  gender: string;
  lastName: string;
  primaryContactNumber: number;
  profileImage: string;
  secondaryContactNumber: number;
  status: string;
  uuid: string;
  profileType: any;
  passwordSetStatus: any
};

export let lang: any

export const getUserInformation = async () => {
  const value: string | null = await AsyncStorage.getItem("user_data");
  const data: UserDetails = JSON.parse(value as string);
  return data;
};

export const getLanguage = async() =>{
 const language =  await AsyncStorage.getItem("language");
 return language
}



