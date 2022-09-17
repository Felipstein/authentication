import EventManager from "../libs/EventManager";

export default function toast({ text, type, duration = 5000 }) {
  EventManager.emit('addtoast', { text, type, duration });
}