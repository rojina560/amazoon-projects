//  conditional rendering option -1
// export default function Todo({task,isdone}) {
//     if (isdone === true) {
//         return <li>task:{task}</li>;
//     } else {
//         return <li>work hard:{task}</li>

//     }
// }
// conditional rendering option 2
// export default function Todo({task,isdone}) {
//     if (isdone) {
//         return <li>task:{task}</li>;
//     }
//      return <li>work hard:{task}</li>;


// }
// coditional renderring  using ternery operator
// export default function Todo({task,isdone}) {
//     return (
//         <li>{isdone ? 'finished' : 'workhard'}:{task}</li>
//     )

// }
export default function Todo({task,isdone}) {
    return (
        <li>{task}{isdone && ': not done' }</li>
    )

}