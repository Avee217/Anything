function addNotification(text) {
  const newItem = document.createElement("li");
  const textnode = document.createTextNode(text);
  newItem.appendChild(textnode);

  const notification_list = document.getElementById("notification");

  notification_list.insertBefore(newItem, notification_list.childNodes[0]);
}
