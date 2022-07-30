class Start {
    constructor()
    {
    this.botName = "EndeavourBOT";
    this.playerName = "YOU";
    this.winner ="";
    this.playerOptions;
    this.botOptions;
    }

    get getbotOptions()
    {
        return this.botOptions;
    }

    set setbotOptions(option)
    {
        this.botOptions = option;
    }

    get getplayerOptions()
    {
        return this.playerOptions;
    }

    set setplayerOptions(Option)
    {
        this.playerOptions = Option;
    }

    botBrain()
    {
        const option = ["✌️","✊","✋"];
        const bot = option[Math.floor(Math.random() * option.length)];
        return bot;
    }

    winCalculation ()
    {
        if(this.botOptions == '✋' && this.playerOptions == '✊')
        {
            return this.winner = this.botName;
        }
        else if(this.botOptions == '✋' && this.playerOptions == '✌️')
        {
            return this.winner = this.playerName;
        }
        else if(this.botOptions == '✌️' && this.playerOptions == '✊')
        {
            return this.winner = this.playerName;
        }
        else if(this.botOptions == '✌️' && this.playerOptions == '✋')
        {
            return this.winner = this.botName;
        }
        else if(this.botOptions == '✊' && this.playerOptions == '✋')
        {
            return this.winner = this.playerName;
        }
        else if(this.botOptions == '✊' && this.playerOptions == '✌️')
        {
            return this.winner = this.botName;
        } 
        else 
        {
          return this.winner = "SERI";   
        }
    }

    MatchResult()
    {
        if (this.winner == this.playerName)
        {
            return 'CONGRATULATION.. ' + this.winner + ' WIN!';
        }
        else if(this.winner == this.botName)
        {
            return 'HAHAHAHA...LOOSER!';
        }
        else
        {
            return "WHOA! ITS TIE..";
        }
    }

}

function pickOptions(pickUp)
{ 
    const start = new Start();
    start.setplayerOptions = pickUp;
    
        
        
    start.setbotOptions = start.botBrain();
    start.winCalculation();

    const inGame = document.getElementById('inGame');
    const result = document.getElementById('result');
    const title = document.getElementById('title');
    
    setTimeout(function(){
        title.textContent = "You Choosed " + start.getplayerOptions;
        result.textContent = " Waiting for The Opponent";
        inGame.textContent = "...";
    },0)
    
    setTimeout(function(){
    finalinGame =("You : " + start.getplayerOptions + " VS " + start.getbotOptions + " : BOT ");
    finalresult = start.MatchResult();
    
    inGame.textContent = finalinGame;
    result.textContent = finalresult ;
    title.textContent = "MATCH RESULT";
    }, 2000);
    
    
        
}

