import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
export const countVowels = (str : string) : number => 
    stringToArray(str).reduce((acc : number, cur : string) : number  => isVowel(cur) + acc  , 0);

const isVowel = (c : string) : number => ("AEIOUaeiou".includes(c) ? 1 : 0); 

/* Question 2 */
export const isPaired = (str : string) : boolean => 
    myIsPaired(stringToArray(str).filter((x : string) : boolean => "[](){}".includes(x) , 0) , stringToArray(""));
           
const myIsPaired = (str : string[], stack : string[]) : boolean => (str.length === 0 && stack.length === 0) ? true :
    ("[({".includes(str[0]) ? myIsPaired(str.slice(1) , PushToStack(stack , str[0]) ) : (isFit(str[0] , stack) ? 
    myIsPaired(str.slice(1) , PopStack(stack)) : false));
    
const PushToStack = (stack : string[] , add: string) : string[] => [...stack , add];
const PopStack = (stack : string[]) : string[] => stack.length === 0 ? stack : stack.slice(0 , stack.length-1);

const isFit = (str : string, stack : string[]) : boolean => ((stack.length > 0) && ((str === ')' && stack[stack.length-1] === '(') ||
            (str === ']' && stack[stack.length-1] === '[') || (str === '}' && stack[stack.length-1] === '{'))) ? true : false
 

/* Question 3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}


export const treeToSentence = (tree: WordTree): string => (
                tree.root + (tree.children.length === 0 ? ' ' : ' ' + tree.children.map(treeToSentence).join(' '))
                ).trim();

