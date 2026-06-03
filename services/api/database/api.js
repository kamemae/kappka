import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY_USERNAME = "kappka_username";
const KEY_STREAK = "kappka_streak";
const KEY_LAST_STREAK = "kappka_last_streak";
const KEY_KAUCJA = "kappka_kaucja";
const KEY_PET = "kappka_pet";
const KEY_ACTIVITY = "kappka_activity";
const KEY_ACHIVEMENTS = "kappka_achivements";
const KEY_STORE = "kappka_store";
const KEY_REWARDS = "kappka_rewards";


// USER MANAGEMENT
export const getUsername = async () => {
    const name = await AsyncStorage.getItem(KEY_USERNAME);
    return name;
}

// KAUCJA MENAGEMENT
export const getKaucja = async () => {
    const value = await AsyncStorage.getItem(KEY_KAUCJA);
    return value ? parseFloat(value) : 0;
}

export const modifyKaucja = async (value) => {
    try {
        const currentKaucja = await getKaucja();
        const newKaucja = currentKaucja + value;
        await AsyncStorage.setItem(KEY_KAUCJA, newKaucja.toString());
    } catch(err) {
        console.log(err);
    }
}

// STREAK MENAGEMENT
export const getStreak = async () => {
    const value = await AsyncStorage.getItem(KEY_STREAK);
    return value ? parseInt(value) : 0;
}

export const getLastStreak = async () => {
    const value = await AsyncStorage.getItem(KEY_LAST_STREAK);
    return value ? parseInt(value) : -1;
}

export const updateStreak = async () => {
    const prevStreakTimestamp = await AsyncStorage.getItem(KEY_LAST_STREAK);
    const timeNow = Math.floor(Date.now() / 1000);

    let streak = parseInt(await AsyncStorage.getItem(KEY_STREAK));

    if (prevStreakTimestamp == 0) {
        streak = 1;
        try {
            await AsyncStorage.setItem(KEY_STREAK, streak);
            await AsyncStorage.setItem(KEY_LAST_STREAK, timeNow);
        } catch(err) {
            console.error(err);
        }
        return;
    }

    const timeDiff = timeNow - prevStreakTimestamp;

    if(timeDiff > 86400) 
        streak = 0;
    else if(timeDiff >= 86400 && timeDiff <= 172800) 
        streak++;
    else 
        return;
    
    try {
        await AsyncStorage.setItem(KEY_STREAK, streak);
        await AsyncStorage.setItem(KEY_LAST_STREAK, timeNow);
    } catch(err) {
        console.error(err);
    }
}

// KAUCUŚ MENAGEMENT
const defaultPet = {
    name: "KAUCUŚ",
    health: 3,
    hat: 0,
}

export const getPetStatus = async () => {
    const value = await AsyncStorage.getItem(KEY_PET);
    return value ? JSON.parse(res) : defaultPet;
}

export const changePetName = async (name) => {
    try {
        const pet = await getPetStatus();
        pet.name = name;
        await AsyncStorage.setItem(KEY_PET, JSON.stringify(pet));
    } catch(err) {
        console.error(err);
    }
}

export const changePetHealth = async (value) => {
    try {
        const pet = await getPetStatus();
        pet.health = Math.max(0, pet.lives + value);
        await AsyncStorage.setItem(KEY_PET, JSON.stringify(pet));
    } catch(err) {
        console.error(err);
    }
}

export const changePetHat = async (hat) => {
    try {
        const pet = await getPetStatus();
        pet.hat = hat;
        await AsyncStorage.setItem(KEY_PET, JSON.stringify(pet));
    } catch(err) {
        console.error(err);
    }
}

export const resetPet = async () => {
    try {
        await AsyncStorage.setItem(KEY_PET, JSON.stringify(defaultPet));
    } catch(err) {
        console.error(err);
    }
}

// ACTIVITY MENAGEMENT







/*
EXAMPLE

{
    username: "USER";
    streak: 0;
    lastStreakUpdate: "data najlepiej w UNIXTIMESTAMP";
    kaucja: 0;
    activity: [
        {
            scanDate: "data",
            scanName: "nazwa",
        },
    ];
    pet: {
        name: "KAUCUŚ";
        lives: 3;
        currentHat: 0;
    };
    achivements: [];
    store: [];
    rewards: [];

}

*/