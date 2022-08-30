import profileReducer, {addPostAC, ProfilePageType, updateNewPostAC} from "./profileReducer";

test("Correct work of profile reducer", () => {
    const startState: ProfilePageType = {
        postsData: [
            {
                id: "1",
                message: "Holla",
                likes: 5
            },
            {
                id: "2",
                message: "It's post",
                likes: 2
            },
            {
                id: "3",
                message: "Yo",
                likes: 4
            },
        ],
        newPostText: "it-kamasutra.com"
    }
    const endState: ProfilePageType = profileReducer(startState, addPostAC())
    const endState2: ProfilePageType = profileReducer(endState, addPostAC())

    const controller = "Dmitry"
    const endState3: ProfilePageType = profileReducer(startState, updateNewPostAC(controller))

    expect(endState.postsData.length).toBe(4)
    expect(endState2.postsData.length).toBe(4)
    expect(endState3.newPostText).toBe(controller)
})