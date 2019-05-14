import { API } from "./apiCalls"

const friendsEl = document.getElementById("friendsContainer");

export function friendSearch() {
    const friendsButton = document.getElementById("addFriendsBtn").addEventListener("click", function (event) {
        // console.log(friendsButton)

        const searchFriends = document.createElement("input");
        searchFriends.setAttribute("class", "searchFriend");
        searchFriends.placeholder ="Search Friends"
        console.log("searchFriends", searchFriends)
        document.getElementById("friendsContainer").appendChild(searchFriends);

        const searchFriendsButton = document.createElement("button")

        searchFriendsButton.setAttribute("class", "searchFriendsButton");
        searchFriendsButton.textContent = "Search";
        document.getElementById("friendsContainer").appendChild(searchFriendsButton);

        searchFriendsButton.addEventListener("click", function (event) {

            API.getUsers().then(entries => {

                let findFriend
                for (let i = 0; i < entries.length; i++) {
                    const friend = entries[i]
                    if (searchFriends.value === friend.user_name) {
                        console.log("found matching name")
                        findFriend = friend
                        break
                    }
                } if (findFriend === undefined) {
                    alert("user not found!")
                }
                console.log(findFriend)
                let findfriendHtml = `<h2 id = "potentialFriend">${findFriend.user_name}</h2>
                <button id = ${findFriend.id}>Add Friend</button>`
                console.log(findfriendHtml)

                friendsEl.innerHTML += findfriendHtml

                const addFriendBtn = document.getElementById(`${findFriend.id}`)

                addFriendBtn.addEventListener("click", function (event) {
                    console.log("hi")

                    let newFriend = {
                        sender: parseInt(sessionStorage.getItem("user_id")),
                        senderName: parseInt(sessionStorage.getItem("user_name")),
                        receiver: findFriend.id,
                        receiverName: findFriend.user_name
                    }

                    API.addNewFriend(newFriend)
                        .then(() => {
                            fetch("http://localhost:8088/friends")
                                .then(friends => friends.json())
                                .then(parsedFriends => {

                                    parsedFriends.forEach(friend => {
                                        const friendCard = document.createElement("div")
                                        friendCard.setAttribute("class", "friend_Card")
                                        friendCard.setAttribute("id", `friend-${friend.id}`)

                                        friendCard.innerHTML = friend.receiverName;
                                        document.querySelector("#friendsCardContainer").appendChild(friendCard)
                                    })
                                })
                        })
                }


                )
            })
        })
    })
}

// function renderFriends() {
//     fetch("http://localhost:8088/friends")
//     .then(results => results.json())
//     .then()
// }






