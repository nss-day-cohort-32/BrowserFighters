import { API } from "./apiCalls"

const friendsEl = document.getElementById("friendsContainer");

export function friendSearch() {
    const friendsButton = document.getElementById("addFriendsBtn").addEventListener("click", function (event) {

        const searchFriends = document.createElement("input");
        searchFriends.setAttribute("class", "searchFriend");
        console.log("searchFriends", searchFriends)
        searchFriends.value = "Search Friends";
        document.body.appendChild(searchFriends);

        const searchFriendsButton = document.createElement("button")

        searchFriendsButton.setAttribute("class", "searchFriendsButton");
        searchFriendsButton.textContent = "Search";
        document.body.appendChild(searchFriendsButton);

        searchFriendsButton.addEventListener("click", function (event) {

            API.getUsers().then(entries => {

                let findFriend
                for (let i = 0; i < entries.length; i++) {
                    const friend = entries[i]
                    if (searchFriends.value === friend.user_name) {
                        console.log("found matching name")
                        findFriend = friend
                        break }
                    else {
                        console.log("user not found");
                    }
                }
                console.log(findFriend)
                let findfriendHtml =`<h2>${findFriend.user_name}</h2>
                <button id = ${findFriend.id}>Add Friend</button>`
                console.log(findfriendHtml)

                friendsEl.innerHTML += findfriendHtml

            })
        })
    })
}




