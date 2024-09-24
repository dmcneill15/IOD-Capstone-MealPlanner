'use client' // client component, not server rendered
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { Draggable, DropArg } from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';


export default function Calendar() {

  const [recipes, setRecipe] = useState([
    { title: 'recipe 1', id: '1' },
    { title: 'recipe 2', id: '2' },
    { title: 'recipe 3', id: '3' },
  ]);

  const [allRecipes, setAllRecipes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [newRecipe, setNewRecipe] = useState([]);

  useEffect(() => {
    let draggableEl = document.getElementById('draggable-el')
    if (draggableEl) {
      new Draggable(draggableEl, {
        itemSelector: ".fc-event",
        eventData: function (eventEl) {
          let title = eventEl.getAttribute("title")
          let id = eventEl.getAttribute("data")
          let start = eventEl.getAttribute("start")
          return { title, id, start }
        }
      })
    }
  }, []);

  function handleDateClick(date, allDay) {
    setNewRecipe({ ...newRecipe, start: date, allDay: allDay, id: new Date().getTime() })
    setShowModal(true);
  }

  function addRecipe(data) {
    const recipe = { ...newRecipe, start: data.date.toISOString(), title: data.draggedEl.innerText, allDay: data.allDaty, id: new Date().getTime() }
    setAllRecipes([...allRecipes, recipe]);
  }

  function handleDeleteModal(data) {
    setShowDeleteModal(true)
    setIdToDelete(Number(data.event.id))
  }

  return (
    /* <main className="flex flex-col items-center justify-between p-24" style={{ margin: 'auto auto', maxWidth: '900px' }}>
       <div className="grid grid-cols-10">
         <div className="col-span-8">
           <FullCalendar
             headerToolbar={{
               left: 'today, next, prev',
               center: 'title',
               right: 'dayGridMonth,timeGridWeek'
             }}
             plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
             initialView="dayGridMonth"
             events={allRecipes}
             eventTextColor="black"
             eventDisplay="block"
             eventBorderColor="green"
             displayEventTime={false}
             //newIndicator={true}
             editable={true}
             droppable={true}
             selectable={true}
             //selectMirror={true}
             dateClick={handleDateClick}
             drop={(data) => addRecipe(data)}
             recipeclick={(data) => handleDeleteModal(data)}
           />
         </div>
         <div id="draggable-el" className="ml-8 w-full border-2 p-2 rounded-md mt-16 lg:h-1/2 bg-violet-50">
           <h1 className="font-bold text-center">Drag Recipes to Plan</h1>
           {recipes.map((recipe => (
             <div
               className="fc-event border-2 p-1 m-2 w-full rounded-md ml-auto text-center bg-white"
               title={recipe.title}
               key={recipe.id} >
               {recipe.title}
             </div>
           )))}
         </div>
       </div>
     </main>*/

     <Container fluid className="h-100">
     <Row className="h-100">
       <Col className="d-flex justify-content-center align-items-center" style={{ backgroundColor: 'blue', color: 'white' }}>
         Blue Box
       </Col>
       <Col className="d-flex justify-content-center align-items-center" style={{ backgroundColor: 'red', color: 'white' }}>
         Red Box
       </Col>
     </Row>
   </Container>

  )
}
