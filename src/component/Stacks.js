import React from 'react'
import moralis from '../img/moralis.png'
import alchemy from '../img/alchemy.png'
import thirdweb from '../img/thirdweb.png'


function Stacks() {
    return (
        <div className='w-full h-screen '>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
              <div>
                <p className='text-4xl font-bold inlive border-b-6 borber-btnc text-white'> Experience</p>
                <p className='py-4 text-gray-300'> Les Stacks utilisés</p>
              </div>


              <div className='text-blue-20
              0 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow[] hover:scale-110 duration-500'>
                    <img alt="html5" src="data:image/png;base64,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" className='w-20 mx-auto' />
                    <p className='py-4'>HTML</p>
                </div>


                <div className='shadow-md shadow[] hover:scale-110 duration-500'>
                    <img alt="css3" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjMDBhY2MxIiBkPSJNMjQsOS42MDRjLTYuNCwwLTEwLjQsMy4xOTktMTIsOS41OTdjMi40LTMuMTk5LDUuMi00LjM5OCw4LjQtMy41OTkgYzEuODI2LDAuNDU2LDMuMTMxLDEuNzgxLDQuNTc2LDMuMjQ3QzI3LjMyOCwyMS4yMzYsMzAuMDUxLDI0LDM2LDI0YzYuNCwwLDEwLjQtMy4xOTksMTItOS41OThjLTIuNCwzLjE5OS01LjIsNC4zOTktOC40LDMuNiBjLTEuODI1LTAuNDU2LTMuMTMtMS43ODEtNC41NzUtMy4yNDdDMzIuNjcyLDEyLjM2NywyOS45NDgsOS42MDQsMjQsOS42MDRMMjQsOS42MDR6IE0xMiwyNGMtNi40LDAtMTAuNCwzLjE5OS0xMiw5LjU5OCBjMi40LTMuMTk5LDUuMi00LjM5OSw4LjQtMy41OTljMS44MjUsMC40NTcsMy4xMywxLjc4MSw0LjU3NSwzLjI0NmMyLjM1MywyLjM4OCw1LjA3Nyw1LjE1MiwxMS4wMjUsNS4xNTIgYzYuNCwwLDEwLjQtMy4xOTksMTItOS41OThjLTIuNCwzLjE5OS01LjIsNC4zOTktOC40LDMuNTk5Yy0xLjgyNi0wLjQ1Ni0zLjEzMS0xLjc4MS00LjU3Ni0zLjI0NkMyMC42NzIsMjYuNzY0LDE3Ljk0OSwyNCwxMiwyNCBMMTIsMjR6Ij48L3BhdGg+PC9zdmc+"  className='w-20 mx-auto' />
                    <p className='py-4'>Tailwind</p>
                </div>


                
                <div className='shadow-md shadow[] hover:scale-110 duration-500'>
                    <img alt="css3" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIKdmlld0JveD0iMCAwIDQ4IDQ4IgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxwYXRoIGZpbGw9IiMwMjc3QkQiIGQ9Ik00MSw1SDdsMywzNGwxNCw0bDE0LTRMNDEsNUw0MSw1eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMzlCRTUiIGQ9Ik0yNCA4TDI0IDM5LjkgMzUuMiAzNi43IDM3LjcgOHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMzMuMSAxM0wyNCAxMyAyNCAxNyAyOC45IDE3IDI4LjYgMjEgMjQgMjEgMjQgMjUgMjguNCAyNSAyOC4xIDI5LjUgMjQgMzAuOSAyNCAzNS4xIDMxLjkgMzIuNSAzMi42IDIxIDMyLjYgMjF6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0VFRSIgZD0iTTI0LDEzdjRoLTguOWwtMC4zLTRIMjR6IE0xOS40LDIxbDAuMiw0SDI0di00SDE5LjR6IE0xOS44LDI3aC00bDAuMyw1LjVsNy45LDIuNnYtNC4ybC00LjEtMS40TDE5LjgsMjd6Ij48L3BhdGg+PC9zdmc+" className='w-20 mx-auto' />
                    <p className='py-4'>CSS</p>
                </div>



                <div className='shadow-md shadow[] hover:scale-110 duration-500'>
                    <img alt="css3" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjZmZkNjAwIiBkPSJNNiw0MlY2aDM2djM2SDZ6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzAwMDAwMSIgZD0iTTI5LjUzOCAzMi45NDdjLjY5MiAxLjEyNCAxLjQ0NCAyLjIwMSAzLjAzNyAyLjIwMSAxLjMzOCAwIDIuMDQtLjY2NSAyLjA0LTEuNTg1IDAtMS4xMDEtLjcyNi0xLjQ5Mi0yLjE5OC0yLjEzM2wtLjgwNy0uMzQ0Yy0yLjMyOS0uOTg4LTMuODc4LTIuMjI2LTMuODc4LTQuODQxIDAtMi40MSAxLjg0NS00LjI0NCA0LjcyOC00LjI0NCAyLjA1MyAwIDMuNTI4LjcxMSA0LjU5MiAyLjU3M2wtMi41MTQgMS42MDdjLS41NTMtLjk4OC0xLjE1MS0xLjM3Ny0yLjA3OC0xLjM3Ny0uOTQ2IDAtMS41NDUuNTk3LTEuNTQ1IDEuMzc3IDAgLjk2NC42IDEuMzU0IDEuOTg1IDEuOTUxbC44MDcuMzQ0QzM2LjQ1MiAyOS42NDUgMzggMzAuODM5IDM4IDMzLjUyMyAzOCAzNi40MTUgMzUuNzE2IDM4IDMyLjY1IDM4Yy0yLjk5OSAwLTQuNzAyLTEuNTA1LTUuNjUtMy4zNjhMMjkuNTM4IDMyLjk0N3pNMTcuOTUyIDMzLjAyOWMuNTA2LjkwNiAxLjI3NSAxLjYwMyAyLjM4MSAxLjYwMyAxLjA1OCAwIDEuNjY3LS40MTggMS42NjctMi4wNDNWMjJoMy4zMzN2MTEuMTAxYzAgMy4zNjctMS45NTMgNC44OTktNC44MDUgNC44OTktMi41NzcgMC00LjQzNy0xLjc0Ni01LjE5NS0zLjM2OEwxNy45NTIgMzMuMDI5eiI+PC9wYXRoPjwvc3ZnPg==" className='w-20 mx-auto' />
                    <p className='py-4'>Javascript (ES6)</p>
                </div>


                <div className='shadow-md shadow[] hover:scale-110 duration-500'>
                    <img alt="css3" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjN2U1N2MyIiBkPSJNMjMsNGMtNi42MTcsMC0xMiw3LjI3LTEyLDE2LjIwNWMwLDQuODM0LDEuNTgyLDkuMTY5LDQuMDc4LDEyLjEzNkMxNS4wMywzMi41NTQsMTUsMzIuNzczLDE1LDMzCWMwLDEuNjU3LDEuMzQzLDMsMywzczMtMS4zNDMsMy0zcy0xLjM0My0zLTMtM2MtMC4zMTUsMC0wLjYxMiwwLjA2Mi0wLjg5NywwLjE1MkMxNS4yMDYsMjcuNzMxLDE0LDI0LjE3NSwxNCwyMC4yMDUJQzE0LDEyLjkyNCwxOC4wMzcsNywyMyw3YzMuODM3LDAsNy4xMTEsMy41NDcsOC40MDQsOC41MThjMS4xMjIsMC4zNDYsMi4yMzcsMC43ODIsMy4zMywxLjMwOEMzMy41NzksOS41MDgsMjguNzU5LDQsMjMsNHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjN2U1N2MyIiBkPSJNMzUuNTA3LDIwLjA4NGMtMy45NDctMi4zOTItOC4zNzQtMy40NDItMTIuMTgyLTIuOTU5QzIyLjc3NSwxNi40NDQsMjEuOTQzLDE2LDIxLDE2CWMtMS42NTcsMC0zLDEuMzQzLTMsM3MxLjM0MywzLDMsM2MxLjI3MiwwLDIuMzUzLTAuNzk1LDIuNzg5LTEuOTEyYzMuMTE4LTAuMzc5LDYuODEyLDAuNTMxLDEwLjE2MywyLjU2MwljNi40MDMsMy44ODEsOS42NywxMC41NjksNy4yODIsMTQuOTExYy0wLjgyNywxLjUwNC0yLjI4NiwyLjU3Mi00LjIxOCwzLjA5Yy0yLjI4NiwwLjYxMS01LjAwNywwLjM5NC03LjcyNy0wLjUyOAljLTAuODM5LDAuNzcyLTEuNzQ5LDEuNDk4LTIuNzI1LDIuMTY4YzIuNTUyLDEuMTE3LDUuMTk2LDEuNzA0LDcuNjY5LDEuNzA0YzEuMjQsMCwyLjQzOC0wLjE0NywzLjU1OS0wLjQ0NwljMi43NDEtMC43MzMsNC44NDEtMi4zMDQsNi4wNzEtNC41NDJDNDcuMDE2LDMzLjI3Niw0My4yNjcsMjQuNzg3LDM1LjUwNywyMC4wODR6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzdlNTdjMiIgZD0iTTM1LDI4Ljk5MkMzNSwyNy4zNCwzMy42NTcsMjYsMzIsMjZzLTMsMS4zNC0zLDIuOTkyYzAsMC42NjksMC4yMjgsMS4yODEsMC42LDEuNzc5CWMtMS4yNzksMi44MDItMy43NDQsNS41NjctNy4wNjIsNy41NzhjLTMuODY1LDIuMzQ0LTguMTg1LDMuMjAyLTExLjU1NSwyLjMwMmMtMS45MzItMC41MTgtMy4zOTEtMS41ODYtNC4yMTgtMy4wOQljLTEuNzAyLTMuMDk0LTAuNTIxLTcuMzc2LDIuNjEtMTAuOTg4Yy0wLjMyMy0xLjE0NC0wLjU2Mi0yLjM0LTAuNzA2LTMuNTc1Yy01LjA3LDQuNzk3LTcuMTA5LDExLjMyMy00LjUzMiwxNi4wMDkJYzEuMjMsMi4yMzgsMy4zMywzLjgwOSw2LjA3MSw0LjU0MmMxLjEyMSwwLjMsMi4zMTgsMC40NDcsMy41NTksMC40NDdjMy4zNDYsMCw3LjAwNy0xLjA2OCwxMC4zMjYtMy4wOAljMy44MzYtMi4zMjUsNi42ODMtNS41NzcsOC4yMDktOC45NjJDMzMuODE1LDMxLjgwMSwzNSwzMC41NDEsMzUsMjguOTkyeiI+PC9wYXRoPjwvc3ZnPg==" className='w-20 mx-auto' />
                    <p className='py-4'>Redux ToolKit</p>
                </div>



                <div className='shadow-md shadow[] hover:scale-110 duration-500'>
                    <img alt="css3" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjZmZhMDAwIiBkPSJNMjUuMDEsOC41NjVjLTAuMzg2LTAuNzUzLTEuNDY2LTAuNzU1LTEuODQ4LDBsLTIuMzQ3LDQuNDI2TDE1LjQwNCwyLjU0NyBjLTAuNDcxLTAuODc0LTEuNzk4LTAuNjUzLTEuOTUyLDAuMzI1TDguMDAzLDM3Ljk5N0wzMC4yNSwxOC43NUwyNS4wMSw4LjU2NXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZjU3ZjE3IiBkPSJNMjUuNzk1IDIyLjYwNEwyMC44MTUgMTIuOTkyIDguMDAzIDM3Ljk5N3oiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZjYTI4IiBkPSJNMzUuODU5LDExLjgzOGMtMC4xMy0wLjgwMi0xLjExNS0xLjEyLTEuNjktMC41NDRMOC4wMDMsMzguMDAybDE0LjQ3OSw3LjYxNCBjMC45MTcsMC41MTIsMi4wMzQsMC41MTIsMi45NTEsMC4wMDFMNDAsMzguMDA1TDM1Ljg1OSwxMS44Mzh6Ij48L3BhdGg+PC9zdmc+" className='w-20 mx-auto' />
                    <p className='py-4'>Firebase</p>
                </div>



                <div className='shadow-md shadow[] hover:scale-110 duration-500'>
                    <img alt="css3" src={moralis} className='w-20 mt-4 mx-auto' />
                    <p className='py-4'>Moralis</p>
                </div>



                <div className='shadow-md shadow[]  hover:scale-110 duration-500'>
                    <img alt="css3" src={thirdweb} className='w-20 mx-auto' />
                    <p className='py-4'>thirdweb</p>
                </div>



                <div className='shadow-md shadow[] hover:scale-110 duration-500'>
                    <img alt="css3" src={alchemy} className='w-20 mx-auto' />
                    <p className='py-4'>Alchemy</p>
                </div>


              </div>


            </div>


            
        </div>
    )
}

export default Stacks;
