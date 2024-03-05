import { Typography } from '@mui/material'
import React from 'react'
import './notes.css';
import { useParams } from 'react-router-dom';
const Cybers = () => {

  const {id} = useParams()

  return (
    <div className='cui'>
        
      <Typography align='center' variant='h4' className="type"  >  Password Cracking <br/> </Typography>

<Typography className='background'variant='h6' textAlign={'justify'}> Password cracking is the process of recovering passwords from the data transmitted by a 
computer system or from the data stored in it. The purpose of cracking a password might be to 
help a user recover a forgotten or lost password, as a preventive measure by system 
administrators to check for easily breakable passwords, or for use by an attacker to gain 
unauthorized system access. 
Hacking often begins with password-cracking attempts. A password is a key piece of 
information necessary to access a system. Consequently, most attackers use password-cracking 
techniques to gain unauthorized access. An attacker may either crack a password manually by 
guessing it or use automated tools and techniques such as a dictionary or a brute-force 
method. Most password-cracking techniques are successful because of weak or easily 
guessable passwords. 
Password complexity plays a key role in improving security against attacks. It is the most 
important element that users should ensure while creating a password. The password should 
not be simple, as such passwords are prone to attacks. The passwords that you choose should 
always be complex, long, and difficult to remember. The password that you are setting for your 
account must meet the complexity requirements of the policy setting. 
Password characters should be a combination of alphanumeric characters. Alphanumeric 
characters consist of letters, numbers, punctuation marks, and mathematical and other 
conventional symbols.  
See the implementation that follows for the exact characters referred to here: 
 Passwords that contain letters, special characters, and numbers: ap1@52
  Passwords that contain only numbers: 23698217
  Passwords that contain only special characters: &*#@!(%)
  Passwords that contain letters and numbers: meet123
  Passwords that contain only letters: POTHMYDE
  Passwords that contain only letters and special characters: bob@&ba
  Passwords that contain only special characters and numbers: 123@$45
  Passwords that contain only uppercase and lowercase letters, such as: RuNnEr
  Passwords that contain more than 20 characters comprising a phrase: such as
 Hardtocrackveryeasil
  Passwords that contain shortcut codes or acronyms, such as L8r_L8rNot2day (i.e., later,
 later, not today)
  Passwords that contain frequently used words specifying websites, such as
 ABT2_uz_AMZ! (i.e., about to use Amazon!)
  Passwords that contain the first letters of words of a long sentence, such as
 TffcievwMi16wiwdm5g (i.e., the first foreign country I ever visited was Mexico in 2016
 when I was doing my 5th grade</Typography>
 
 <Typography variant='h4' align='center'> Types of Password Attacks </Typography>
<Typography className='background'textAlign={'justify'} variant='h6'>
Password cracking is one of the crucial stages of system hacking. Password-cracking 
mechanisms often exploit otherwise legal means to gain unauthorized system access, such as 
recovering a user’s forgotten password.  
 
Classification of password attacks depends on the attacker’s actions, which are of the following 
four types: 
 Non-Electronic Attacks: This is, for most cases, the attacker’s first attempt at gaining 
target system passwords. Non-electronic or non-technical attacks do not require any 
technical knowledge about hacking or system exploitation. Techniques used to perform 
non-electronic attacks include shoulder surfing, social engineering, dumpster diving, etc. 
 Active Online Attacks: This is one of the easiest ways to gain unauthorized 
administrator-level system access. Here, the attacker communicates with the target 
machine to gain password access. Techniques used to perform active online attacks 
include password guessing, dictionary and brute-forcing attacks, hash injection, 
LLMNR/NBT-NS poisoning, use of Trojans/spyware/keyloggers, internal monologue 
attacks, Markov-chain attacks, Kerberos password cracking, etc. 
 Passive Online Attacks: A passive attack is a type of system attack that does not lead to 
any changes in the system. In this attack, the attacker does not have to communicate 
with the system, but passively monitor or record the data passing over the 
communication channel, to and from the system. The data are then used to break into 
the system. Techniques used to perform passive online attacks include wire sniffing, 
man-in-the-middle attacks, replay attacks, etc. 
 Offline Attacks: Offline attacks refer to password attacks in which an attacker tries to 
recover cleartext passwords from a password hash dump. Offline attacks are often time
consuming but have a high success rate, as the password hashes can be reversed owing 
to their small keyspace and short length. Attackers use pre-computed hashes from 
rainbow tables to perform offline and distributed network attacks.
</Typography>
        
    </div>
  )
}

export default Cybers