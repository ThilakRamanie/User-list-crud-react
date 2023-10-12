// usersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    list: [
      {
        id: "0",
        firstName: "John",
        lastName: "Doe",
        email: "john@jmail.com",
        gender: "Male",
        skills: ["Other"],
        city: "City 2",
        date_of_birth: "2023-10-03",
        photo:
          "https://images.pexels.com/photos/18453941/pexels-photo-18453941/free-photo-of-young-brunette-man-posing-in-white-hooded-sweatshirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        mobile: "6395874582",
      },
      {
        id: "1",
        firstName: "Derik",
        lastName: "Mark",
        email: "derik@jmail.com",
        gender: "Female",
        skills: ["Other"],
        city: "City 2",
        date_of_birth: "2023-10-03",
        photo:
          "https://images.pexels.com/photos/18464893/pexels-photo-18464893/free-photo-of-smiling-woman-in-folklore-dress-and-headscarf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        mobile: "6395874582",
      },
      {
        id: "2",
        firstName: "Antony",
        lastName: "Anton",
        email: "anton@jmail.com",
        gender: "Male",
        skills: ["Other"],
        city: "City 2",
        date_of_birth: "2023-10-03",
        photo:
          "https://images.pexels.com/photos/18471163/pexels-photo-18471163/free-photo-of-eldery-man-reading-a-newspaper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        mobile: "6395874582",
      },
      {
        id: "3",
        firstName: "Chris",
        lastName: "Holmes",
        email: "chris@jmail.com",
        gender: "Male",
        skills: ["Other"],
        city: "City 2",
        date_of_birth: "2023-10-03",
        photo:
          "https://images.pexels.com/photos/18458649/pexels-photo-18458649/free-photo-of-smiling-elderly-man-in-hat-on-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        mobile: "6395874582",
      },
      {
        id: "4",
        firstName: "Suzanne",
        lastName: "high",
        email: "suzanne@jmail.com",
        gender: "Male",
        skills: ["Other"],
        city: "City 2",
        date_of_birth: "2023-10-03",
        photo:
          "https://images.pexels.com/photos/18541380/pexels-photo-18541380/free-photo-of-model-posing-against-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        mobile: "6395874582",
      },
    ],
  },
  reducers: {
    addUser: (state, action) => {
      state.list.push(action.payload);
    },
    updateUser: (state, action) => {
      //   const { id, updatedUser } = action.payload;
      //   state.list[id] = updatedUser;
      const {
        id,
        firstName,
        lastName,
        email,
        gender,
        skills,
        city,
        date_of_birth,
        photo,
        mobile,
      } = action.payload;
      const existingUser = state.list.find((user) => user.id === id);
      if (existingUser) {
        existingUser.firstName = firstName;
        existingUser.lastName = lastName;
        existingUser.gender = gender;
        existingUser.skills = skills;
        existingUser.city = city;
        existingUser.date_of_birth = date_of_birth;
        existingUser.photo = photo;
        existingUser.mobile = mobile;
        existingUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const indexToRemove = state.list.findIndex((user) => user.id === id);
      if (indexToRemove !== -1) {
        state.list.splice(indexToRemove, 1);
      }
    },
    resetForm: (state, action) => {
      const { id } = action.payload;
    //   console.log("clear", id);
      const existingUser = state.list.find((user) => user.id === id);
      if (existingUser) {
        existingUser.firstName = "";
        existingUser.lastName = "";
        existingUser.gender = "Male";
        existingUser.skills = ["Other"];
        existingUser.city = "City 1";
        existingUser.date_of_birth = "";
        existingUser.photo = "";
        existingUser.mobile = "";
        existingUser.email = "";
      }
    },
  },
});

export const { addUser, updateUser, deleteUser, resetForm } =
  usersSlice.actions;
export const selectUsers = (state) => state.users.list;
export default usersSlice.reducer;
