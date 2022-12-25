//  ................... Question 1 .....................

// class open_account_factory {
//     constructor(user_name,user_age,country,user_address,deposite){
//         this.user_name=user_name;
//         this.user_age=user_age;
//         this.country=country;
//         this.user_address=user_address;
//         this.deposite=deposite;
//     }

//     Choose_account_type (acount_type){
//         if (acount_type=="saving account"){
//             console.log("You create Saving Account")
//             let account=new Saving_account()
//             account.create_saving_account(this.user_name,this.user_age,this.country,this.user_address,this.deposite)
//         }
//         else if(acount_type=="current account")
//         {
//             console.log("You create Current Account")
//             let account=new Current_account()
            

//             account.create_current_account(this.user_name,this.user_age,this.country,this.user_address,this.deposite)
//             return account
//         }
//         else{
//             console.log("Error")
//         }
        
//     }

// }

// //  Saving account
// class Saving_account {
    
//     constructor(){
//         this.deposit;
//         this.user_name;
//         this.user_age;
//         this.user_address;
        
//     }

//     create_saving_account(user_name,user_age,country,user_address){
//         this.user_name=user_name;
//         this.user_age=user_age;
//         this.country=country;
//         this.user_address=user_address;
//     }
// }






// // Current Account
// class Current_account {

//     constructor(){
//         this.deposite;
//         this.withdrawa;
//         this.user_name;
//         this.user_age;
//         this.user_address;
//         this.country;
//     }

//     create_current_account(user_name,user_age,country,user_address,deposite){
//         this.user_name=user_name;
//         this.deposite=deposite;
//         this.user_age=user_age;
//         this.country=country;
//         this.user_address=user_address;

//     }


//     withdraw(amount){
        
//         if(amount <= this.deposite)
//         {
//           this.deposite=this.deposite-amount;
//         //   console.log("ٌRemaining amount after withdraw = "+this.deposite+" LE")
//         }
//         else
//         {
//            console.log("The balance is not enough") 
//         }
//     }

//     set_debosite (new_value){
//         this.deposite=this.deposite+new_value;
//     }


// }



// // Display Account
//    function display_account (account){
//         console.log(account.user_name);
//         console.log(account.user_age);
//         console.log(account.country);
//         console.log(account.user_address);
//         console.log("Remaining amount = "+account.deposite +" LE");
//     }

// // transaction between 2 accounts

// class Transaction {
//     constructor(){
        
//     }

//     trasnsfer_mony(from_account1,to_account2,amount){
//         if(from_account1.deposite >= amount){
//             from_account1.withdraw(amount);
//             to_account2.deposite+=amount;

//         }
//     }
// }





// ////////////////////////////////////////////

// let new_account1= new open_account_factory("aly",26,"Egypt", "Giza",1000)
// let aly_account=new_account1.Choose_account_type("current account")
// console.log(aly_account)

// console.log(".........................................")


// let new_account2= new open_account_factory("omar",25,"Egypt", "Giza",1000)
// let omar_account=new_account2.Choose_account_type("current account")
// console.log(omar_account)


// console.log(".........................................")


// aly_account.set_debosite(1000)
// omar_account.set_debosite(500)

// display_account(aly_account)
// display_account(omar_account)


// console.log(".........................................")

// let tranfer_money_from_aly_to_omar= new Transaction()
// tranfer_money_from_aly_to_omar.trasnsfer_mony(aly_account,omar_account,250)



// display_account(aly_account)
// display_account(omar_account)




/////////////////////////////////////////////////////// Question 2 ///////////////////////////////////////////////////////////


class Monster {
    constructor(name,hp){
        this.name=name;
        this.hp=hp;
    };

    getName(){
        return this.name
    };

    getHP(){
        return this.hp
    };

    attack(){
        throw new Error('You have to implement the method doSomething!');
    };
}



class Alien extends Monster {
    constructor(name,hp,new_power1,new_power2,new_power3){
        super(name,hp)
        this.new_power1=new_power1;
        this.new_power2=new_power2;
        this.new_power3=new_power3;
    }

  

    attack(){
        
        console.log(`${this.name} Attack using (${this.new_power1.attack_damage } ${this.new_power2.attack_damage} ${this.new_power3.attack_damage}) Power`)



    };
}

class Zopmpie extends Monster {
    constructor(name,hp,new_power1,new_power2,new_power3){
        super(name,hp)
        this.new_power1=new_power1;
        this.new_power2=new_power2;
        this.new_power3=new_power3;
    }

    attack(){
        
        console.log(`${this.name} Attack using (${this.new_power1.attack_damage } ${this.new_power2.attack_damage} ${this.new_power3.attack_damage}) Power`)


    };
}

class Mummy extends Monster {
    constructor(name,hp,new_power1,new_power2,new_power3){
        super(name,hp)
        this.new_power1=new_power1;
        this.new_power2=new_power2;
        this.new_power3=new_power3;

    }

    attack(){
        console.log(`${this.name} Attack using (${this.new_power1.attack_damage } ${this.new_power2.attack_damage} ${this.new_power3.attack_damage}) Power`)


    };
}



class Decorated_Monster {
    constructor(updated_name,updated_hp,attack_damage){
        this.updated_name=updated_name;
        this.updated_hp=updated_hp;
        this.attack_damage=attack_damage;
    }
}


class Fire extends Decorated_Monster {
    constructor(updated_name,updated_hp,attack_damage){
        super(updated_name,updated_hp,attack_damage)
    }
}

class Flying extends Decorated_Monster {
    constructor(updated_name,updated_hp,attack_damage){
        super(updated_name,updated_hp,attack_damage)
    }
}

class Laser extends Decorated_Monster {
    constructor(updated_name,updated_hp,attack_damage){
        super(updated_name,updated_hp,attack_damage)
    }
}

class Poison extends Decorated_Monster {
    constructor(updated_name,updated_hp,attack_damage){
        super(updated_name,updated_hp,attack_damage)
    }
}


let new_power_1= new Laser("New Zompie",600,"Laser");
let new_power_2= new Laser("New Zompie",600,"Flying");
let new_power_3= new Laser("New Zompie",600,"Ice");
let monster_1 =new Zopmpie("Zompie",500,new_power_1,new_power_2,new_power_3);
monster_1.attack()

