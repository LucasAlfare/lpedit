// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {pod} from '../models';

export function GetAmpType():Promise<Array<string>>;

export function GetCurrentDevice():Promise<string>;

export function GetPedalType():Promise<{[key: string]: Array<string>}>;

export function GetPod():Promise<pod.Pod>;

export function IsStarted():Promise<boolean>;

export function ListDevices():Promise<Array<any>>;

export function QueryAllPresets(arg1:boolean):Promise<void>;

export function QueryAllSets(arg1:boolean):Promise<void>;

export function QueryCurrentPreset(arg1:boolean):Promise<void>;

export function QueryCurrentPresetID(arg1:boolean):Promise<void>;

export function QueryCurrentSetID(arg1:boolean):Promise<void>;

export function QueryPreset(arg1:boolean,arg2:number,arg3:number):Promise<void>;

export function ReloadPreset():Promise<void>;

export function SavePreset():Promise<void>;

export function SetAmpActive(arg1:number,arg2:boolean):Promise<void>;

export function SetAmpParameterValue(arg1:number,arg2:number,arg3:string):Promise<void>;

export function SetAmpType(arg1:number,arg2:string):Promise<void>;

export function SetCabParameterValue(arg1:number,arg2:number,arg3:string):Promise<void>;

export function SetCabType(arg1:number,arg2:string):Promise<void>;

export function SetCurrentPresetName(arg1:string):Promise<void>;

export function SetDTClass(arg1:number,arg2:string):Promise<void>;

export function SetDTClass2(arg1:number,arg2:string):Promise<void>;

export function SetDTMode(arg1:number,arg2:string):Promise<void>;

export function SetDTMode2(arg1:number,arg2:string):Promise<void>;

export function SetDTTopology(arg1:number,arg2:string):Promise<void>;

export function SetDTTopology2(arg1:number,arg2:string):Promise<void>;

export function SetNotify(arg1:any):Promise<void>;

export function SetPedalActive(arg1:number,arg2:boolean):Promise<void>;

export function SetPedalBoardItemActive(arg1:number,arg2:boolean):Promise<void>;

export function SetPedalBoardItemParameterValue(arg1:number,arg2:number,arg3:string):Promise<void>;

export function SetPedalBoardItemParameterValueMax(arg1:number,arg2:number,arg3:string):Promise<void>;

export function SetPedalBoardItemParameterValueMin(arg1:number,arg2:number,arg3:string):Promise<void>;

export function SetPedalBoardItemPosition(arg1:number,arg2:number,arg3:number):Promise<void>;

export function SetPedalBoardItemType(arg1:number,arg2:string,arg3:string):Promise<void>;

export function SetPedalBoardParameterValue(arg1:number,arg2:string):Promise<void>;

export function SetPedalParameterValue(arg1:number,arg2:number,arg3:string):Promise<void>;

export function SetPedalType(arg1:number,arg2:string,arg3:string):Promise<void>;

export function SetPreset(arg1:number,arg2:number):Promise<void>;

export function Start(arg1:string):Promise<void>;

export function Stop():Promise<void>;
