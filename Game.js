const GameState = Object.freeze({
    START:   Symbol("start"),
    HOME:  Symbol("home"),
    DOOR: Symbol("door"),
    INSIDE: Symbol("inside"),
    RELAXING: Symbol("relaxing"),
    WATCHING: Symbol("watching"),
    NEWS: Symbol("news"),
    AGAIN: Symbol("again"),
    PHONE: Symbol("phone"),
    SOUND: Symbol("sound"),
    END: Symbol("end")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.START;
    }
    
    makeAMove(sInput)
    {
        let sReply = "It is Sunday 11:50 PM now, there is a light rain and fog in the silenced outside. You are studying in school library alone, feeling hungry and tired. Do you want to STAY in the void library or go BACK home?";
        switch(this.stateCur){
            case GameState.START:
                this.stateCur = GameState.HOME;
                break;
            case GameState.HOME:
                if(sInput.toLowerCase().match("back")){
                    sReply = "When you get back to your home, you find that the lights in the upstairs roommate room are still on. KNOCKING on the door or opening the door with a KEY?"
                    this.stateCur = GameState.DOOR;
                }else{
                    sReply = "However, the last bus is end at 12 PM. After you miss the bus, you can only walk back slowly in the rain. Do you want to STAY in the library or go BACK home?";
                }
                break;
            case GameState.DOOR:
                if(sInput.toLowerCase().match("key") || sInput.toLowerCase().match("yes")){
                    sReply = "You take out the key and try to pent the door, but no matter how you try, the door still can't be opened. It seems to be locked inside, keep trying to use the key or go inside from the garage door by entering the digital PASSWORD?";
                    this.stateCur = GameState.INSIDE;
                }else if(sInput.toLowerCase().match("knocking")){
                    sReply = "After knocking on the door, there was no reaction and movement at all. After waiting for a while, you found the KEY from the bag. Using the key?";
                }
                else if(sInput.toLowerCase().match("no")){
                    sReply = "It is too cold outside, lets go inside. Using the key?";
                }
                else{
                    sReply = "KNOCKING on the door or opening the door with a KEY?";
                }
                break;
            case GameState.INSIDE:
                if(sInput.toLowerCase().match("password")){
                    sReply = "After entering the house, you go upstairs and find that the roommate was not at home. You turn off the lights in your roommate's room. Then go back to your room, put down your schoolbag and replace the clothes that are wet with the rain. Do you want to open the tap in the bathtub and take a hot bath?";
                    this.stateCur = GameState.RELAXING;
                }else{
                    sReply = "The door still can't be opened. It seems to be locked inside, keep trying to use the key or go inside from the garage door by entering the digital PASSWORD?";
                }
                break;
            case GameState.RELAXING:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "It takes a while to fill-up the water in the bathtub. Do you want to go downstairs to turn on the TV?";
                    this.stateCur = GameState.WATCHING;
                }else{
                    sReply = "Because of the rain and busy study at night, you feel tired and cold. Do you want to open the tap in the bathtub and take a hot bath?";
                }
                break;
            case GameState.WATCHING:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "You go downstairs to turn on the TV and lie on the sofa to start watching. At this time, a window is popped up on the screen, and the title above says “emergency news”. Are you trying to OPEN the window or trying to CLOSE the window?";
                    this.stateCur = GameState.NEWS;
                }else{
                    sReply = "The waiting time is very boring, and the home is very quiet. Do you want to go downstairs to turn on the TV?";
                }
                break;
            case GameState.NEWS:
                if(sInput.toLowerCase().match("open")){
                    sReply = "The emergency news broadcast by the local government was that a dangerous prisoner with multiple personalities and schizophrenia escaped from the local prison. At the same time, the sound of the water in the upstairs bathtub suddenly stopped! Do you go upstairs to find out?";
                    this.stateCur = GameState.AGAIN;
                }else{
                    sReply = "It didn't take long after the window was closed, and it popped up again. Are you trying to OPEN the window or trying to CLOSE the window?";
                }
                break;
            case GameState.AGAIN:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "You go into the upstairs bathroom and find that the water is not full. Do you want to turn the tap switch on again?";
                    this.stateCur = GameState.PHONE;
                }else{
                    sReply = "You recalled that the roommate is not at home, it feels very strange. Do you go upstairs to find out?";
                }
                break;
            case GameState.PHONE:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "You turn the switch on again to release the water, and then take your phone downstairs and continue to watch the news. At this time your mobile phone rang and the call was from your roommate. Do you want to answer?";
                    this.stateCur = GameState.SOUND;
                }else{
                    sReply = "The water is not full, and the temperature is not suitable. Do you want to turn the tap switch on again?";
                }
                break;
            case GameState.SOUND:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "You picked up and connected the call, but no one spoke on the other side. You tried to say a few words but still get none responds. Then you gradually heard a familiar voice, that is the sound of the bathroom tap...";
                    this.stateCur = GameState.END;
                }else{
                    sReply = "You did not answer this call. However, the phone then rang again, and still showing your roommate’s name. Do you want to answer it?";
                }
                break;
            case GameState.END:                
                if(sInput.toLowerCase().match("?")){
                    sReply = "Joking! Baby";                   
                }else{
                    sReply = "**********";
                }            
                break;
        }
        return(sReply);
    }
}
