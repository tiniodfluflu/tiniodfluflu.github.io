export class BattleLog {
    enabled:Boolean;
    battleEvents:string[];
    olmDef:number;

    constructor(enabled:Boolean) {
        this.enabled = enabled;
        this.battleEvents = [];
    }

    logEvent(event: string):void {
        if(this.enabled) {
            this.battleEvents.push(event);
        }
    }

    clearLog():number {
        let length = this.battleEvents.length;
        this.battleEvents = [];
        return length;
    }

    dumpLog():void {
        console.log(this.battleEvents);
    }

    setOlmDef(input:number):void {
        this.olmDef = input;
    }
    
    clearOlmDef():void {
        this.olmDef = 178;
    }

    getOlmDef():number {
        return this.olmDef;
    }
}