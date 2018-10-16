import {createStore} from 'redux';
export let initialState={
        block:{
        "Ambala":["--Select Block--","Ambala Cantt","Ambala City","Barara","Naraingarh","Saha","Shahzadpur"],
        "Bhiwani":["--Select Block--","Bawani Khera","Behal","Kairu","Loharu","Siwani","Tosham"],
        "Charkhi Dadri":["--Select Block--","Badhra","Baund Dadri","Jhojhu"],
        "Faridabad":["--Select Block--","Ballabgarh","Tigaon"],
        "Fatehabad":["--Select Block--","Bhattu Kalan","Bhuna","Jakhal","Nagpur","Ratia","Tohana"],
        "Gurugram":["--Select Block--","Farrukhnagar","Pataudi","Sohana"],
        "Hisar":["--Select Block--","Adampur","Agroha","Barwala","Hansi","Narnaund","Uklana"],
        "Jhajjar":["--Select Block--","Badli","Bahadurgarh","Beri","Matanhail","Salhawas"],
        "Jind":["--Select Block--","Alewa","Julana","Narwana","Pillukhera","Safidon","Uchana","Ujhana"],
        "Kaithal":["--Select Block--","Dhand","Guhla","Kalayat","Pundri","Rajound","Siwan"],
        "Karnal":["--Select Block--","Assandh","Gharaunda","Indri","Kunjpura","Munak","Nilokheri","Nissing at Chirao"],
        "Kurukshetra":["--Select Block--","Babain","Ismailabad","Ladwa","Pehowa","Pipli","Shahbaad","Thanesar"],
        "Mahendragarh":["--Select Block--","Ateli Nangal","Kanina","Nangal Chaudhary","Narnaul","Nizampur","Satnali","Sihma"],
        "Mewat":["--Select Block--","Ferozepur Jhirka","Indri","Nagina","Nuh","Pingwan","Punahana","Taoru"],
        "Palwal":["--Select Block--","Badoli","Hassanpur","Hathin","Hodal","Prithla"],
        "Panchkula":["--Select Block--","Barwala","Morni","Pinjore","Raipurrani"],
        "Panipat":["--Select Block--","Bapoli","Israna","Madlauda","Samalakha","Sanauli Khurd"],
        "Rewari":["--Select Block--","Bawal","Dahina","Jatusana","Khol","Nahar"],
        "Rohtak":["--Select Block--","Kalanaur","Lakhan Majra","Maham","Sampla"],
        "Sirsa":["--Select Block--","Baragudha","Dabwali","Ellenabad","Nathusari Chopta","Odhan","Rania"],
        "Sonipat":["--Select Block--","Ganaur","Gohana","Kathura","Kharkhoda","Mundlana","Murthal","Rai"],
        "Yamunanagar":["--Select Block--","Bilaspur","Chahachhrauli","Jagadhari","Khizrabad","Mustafabad","Radaur","Sadaura"]
      },
        warning:{
            float:"left",
            paddingTop:5,
            paddingBottom:5,
            color:"white"
    }
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'Print':{
            return state;
        }
        default:{
            return state;
        }
    }
}
const store=createStore(reducer)
export default store
