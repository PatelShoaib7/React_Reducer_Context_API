

export const reducer =(state , {type , playLoad})=>
{
   switch(type)
   {
    case "INCREMENT" :
        {
         return   state + playLoad
        }
    case "DECREMENT" :
        {
         return   state + playLoad
        }
        case "INCREMENTBY500" :
            {
             return   state + playLoad
            }
        case "DECREMENTBY500" :
            {
             return   state - playLoad
            }
            case "INCREMENTBY1000" :
                {
                 return   state + playLoad
                }
            case "DECREMENTBY1000" :
                {
                 return   state - playLoad
                }
                case "INCREMENTBY2000" :
                    {
                     return   state + playLoad
                    }
                case "DECREMENTBY2000" :
                    {
                     return   state - playLoad
                    }
    default :
        {
            return state
        }
    
   }
   
    
}