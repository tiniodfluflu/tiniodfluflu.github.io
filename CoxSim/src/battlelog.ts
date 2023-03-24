export class BattleLog {
    enabled:Boolean;
    battleEvents:string[];

    constructor(enabled:Boolean) {
        this.enabled = enabled;
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
}