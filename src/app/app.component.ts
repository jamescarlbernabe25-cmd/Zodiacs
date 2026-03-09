/* Author: James Carl Bernabe
Activity Title: AX002 – Horoscope
Date Completed: January 12, 2024 */


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AX002';
  
  zodiacData: string[] =[];
  
  description = "";
  
  image = "default.webp";
  
  name = "";
  sign='';
  dob = "";
  
  getName(value:string,valu:string){
  if(value !== '' && valu !== ''){
  const birthDate = new Date(valu);
  
  this.name = "こんにちは "+value;
  
  const monthDate = [
  
  'January', 'February', 'March', 'April', 'May', 'June',
  
  'July', 'August', 'September', 'October', 'November', 'December'
  
  ];
  
  const month = monthDate[birthDate.getMonth()];
  
  const day = birthDate.getDate();
  
  this.dob = "Born on "+month +" " + day + " " + birthDate.getFullYear();
  
  let zodiacSign;
  
  if ((month === 'March' && day >= 21) || (month === 'April' && day <= 19)) {
  
  zodiacSign = 'Aries';
  
  } else if ((month === 'April' && day >= 20) || (month === 'May' && day <= 20)) {
  
  zodiacSign = 'Taurus';
  
  } else if ((month === 'May' && day >= 21) || (month === 'June' && day <= 20)) {
  
  zodiacSign = 'Gemini';
  
  } else if ((month === 'June' && day >= 21) || (month === 'July' && day <= 22)) {
  
  zodiacSign = 'Cancer';
  
  } else if ((month === 'July' && day >= 23) || (month === 'August' && day <= 22)) {
  
  zodiacSign = 'Leo';
  
  } else if ((month === 'August' && day >= 23) || (month === 'September' && day <= 22)) {
  
  zodiacSign = 'Virgo';
  
  } else if ((month === 'September' && day >= 23) || (month === 'October' && day <= 22)) {
  
  zodiacSign = 'Libra';
  
  } else if ((month === 'October' && day >= 23) || (month === 'November' && day <= 21)) {
  
  zodiacSign = 'Scorpio';
  
  } else if ((month === 'November' && day >= 22) || (month === 'December' && day <= 21)) {
  
  zodiacSign = 'Sagittarius';
  
  } else if ((month === 'December' && day >= 22) || (month === 'January' && day <= 19)) {
  
  zodiacSign = 'Capricorn';
  
  } else if ((month === 'January' && day >= 20) || (month === 'February' && day <= 18)) {
  
  zodiacSign = 'Aquarius';
  
  } else if ((month === 'February' && day >= 19) || (month === 'March' && day <= 20)) {
  
  zodiacSign = 'Pisces';
  
  }
  
  const zodiacData = {
  
  Aries: {
  sign: 'R A M',
  imageLocal: "aries.webp",
  
  description: `Aries people are bold, energetic, full of vitality, charismatic, fun, lively, passionate, 
  and driven by their hearts and desires . They have to feel ~all in~ on something to succeed in it, 
  but, when they are, they are unstoppable. They thrive on competition, challenges, targets, and rivalry.`
  
  },
  
  Taurus: {
    sign: 'B U L L',
  imageLocal: "taurus.webp",
  
  description: `Tauruses have a regal quality about them. They are graceful and diligent laborers . 
  They can be stubborn, bull-headed, and set in their ways, but they are also great listeners and very dependable. 
  Tauruses can absolutely go on forever.`
  
  },
  
  Gemini: {
    sign: 'T W I N S',
  imageLocal: "gemini.webp",
  
  description: `Geminis are very intelligent and pick up knowledge quickly . 
  They are perceptive, analytical, and often very funny. They have an unreserved, childlike curiosity, always asking new questions. 
  Geminis have an uncanny ability to size up a person's character in a matter of seconds , even if they only just met them.`
  
  },
  
  Cancer: {
    sign: 'C R A B',
  imageLocal: "cancer.webp",
  
  description: `Cancer is the fourth zodiac sign. Cancerians are primarily known for being emotional, nurturing, and highly intuitive, 
  as well as being sensitive and sometimes insecure. Their elemental sign is water, which makes sense when you consider the emotional 
  depths associated with this sign.`
  
  },
  
  Leo: {
    sign: 'L I O N',

  imageLocal: "leo.webp",
  
  description: `Leos are the natural leaders of the zodiac, as magnificent and striking as the Lion that embodies their sign. Leos are radiantly joyful, 
  liberal with their appeal and endowments. They are fiercely proud and confident. They love and live life to the fullest rather than being in charge at home, work, and play.`
  
  },
  
  Virgo: {
    sign: 'V I R G I N',
  imageLocal: "virgo.webp",
  
  description: `On the appearance, Virgos are humble, self-effacing, industrious, and practical , but under the surface, they are frequently natural, 
  kind, and sympathetic, as befits their zodiac sign. Virgoans are methodical and quick thinkers, yet they have so much mental energy that they are frequently stressed and tense.`
  
  },
  
  Libra: {
    sign: 'B A L A N C E',
  imageLocal: "libra.webp",
  
  description: `Librans are extroverted, cosy, and friendly people. Librans, like the Scales that symbolise the sign, are often concerned with attaining balance, 
  harmony, peace, and justice in the world. With their vast stores of charm, intelligence, frankness, persuasion, and seamless connectivity, they are well-equipped to do so.`
  
  },
  
  Scorpio: {
    sign: 'S C O R P I O N',
  imageLocal: "scorpius.webp",
  
  description: `Scorpio character traits include being strong, enigmatic and independent characters who crackle with an intensity and charisma that makes them un-ignorable. 
  For all of that power though, they often remain unknowable to others, because they guard themselves and their private lives fiercely.`
  
  },
  
  Sagittarius: {
    sign: 'A R C H E R',
  imageLocal: "sagittarius.webp",
  
  description: `Sagittarians are outgoing, cheerful outgoing who draw admiration and admiration from everyone who comes into touch with them. 
  Sagittarius people are faithful, intelligent, forceful, and sympathetic. They are one-of-a-kind, gifted, and wise beyond their years.`
  
  },
  
  Capricorn: {
    sign: 'G O A T - H O R N E D',
  imageLocal: "capricorn.webp",
  
  description: `Ambitious, hardworking, and enterprising is one side of the sign. The Capricorn natives are extremely driven, enthusiastic about life, 
  and capable of setting lofty but attainable objectives. The Capricorn natives on the other hand are lost in a world of actual or perceived barriers to achievement.`
  
  },
  
  Aquarius: {
    sign: 'W A T E R  B E A R E R',
  imageLocal: "aquarius.webp",
  
  description: `Aquarians are clever, analytical, technical, truthful, assertive, confident, progressive and innovative . 
  They like to solve problems, improve what's already working well, and push boundaries. They are activists, 
  campaigners and progressors of the causes they think will make a difference to the world.`
  
  },
  
  Pisces: {
    sign: 'F I S H E S',
  imageLocal: "pisces.webp",
  
  description: `Pisces are highly creative and imaginative , Walker reports, as well as compassionate and loving. 
  Their emotional sensitivity factor is high, helping them to remain in tune with others but also leaving them vulnerable to criticism, 
  worrying a lot about the effect that their actions might have on others.`
  
  }
  
  };
  
  const signData = zodiacData[zodiacSign as keyof typeof zodiacData];
  
  this.description = signData.description;
  this.sign=signData.sign;
  this.image = signData.imageLocal;
  
  }else{
    window.alert('Pasuyo naman po oh. Pakiinputan na lang po, para mabilis po tayo. Salamat po.');
  }}
  
  }