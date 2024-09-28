import { Text, View, Image, StyleSheet } from "react-native";
import { FavoriteContext } from "../store/context/favorites-context";
import { useContext, useState, useEffect, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

export default function FavoritesScreen() {
  const FavoriteCtx = useContext(FavoriteContext);

  // const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids );

  const meals = MEALS.filter((meal) => FavoriteCtx.ids.includes(meal.id));
  // const meals = MEALS.filter((meal) => favoriteMealIds.includes(meal.id));

  // console.log(FavoriteCtx.ids);

  // console.log(meals);

  // return (
  //   <>
  //     {meals.map((meal) => (
  //       <Text>{meal.title}</Text>
  //     ))}
  //   </>
  // );

  if(meals.length === 0){
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.textContent}>You have no favorite meals yet!!</Text>
      </View>
    )
  }

  return <MealsList items={meals} />
}

// export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex:1,
    justifyContent:'center',
    alignItems: "center",
  },

  textContent: {
    fontSize: 20,
    color: "white",
  },

});
