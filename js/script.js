let floorCell = document.querySelector('#floor')
let roomsCell = document.querySelector('#rooms')
let floor = document.querySelectorAll('.floor')


floorCell.innerText = "0"
roomsCell.innerText = "0"


console.log(floorCell);
console.log(roomsCell);
console.log(floor);

floor.forEach(item => {
 /*   console.log(item );*/

    item.addEventListener('mouseover', function(){

        let dataFloor = item.getAttribute('data-floor')
        let dataRooms = item.getAttribute('data-rooms')

        console.log("Floor:" + dataFloor);
        console.log("Rooms:" + dataRooms);
       
        floorCell.innerText = dataFloor
        roomsCell.innerText = dataRooms

    })
})