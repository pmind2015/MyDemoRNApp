import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import axios from "axios";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    //https://1234.mn/api/courses/last-lessons
    axios
      .get("https://1234.mn/api/courses/last-lessons")
      .then(result => setCourses(result.data))
      .catch(err => setError(err.message));
  }, []);

  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontSize: 18, top: 20, marginBottom: 20 }}>
        Шинээр нэмэгдсэн хичээлүүд
      </Text>
      <FlatList
        data={courses}
        keyExtractor={course => course.id}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: "bold" }}>{item.course}</Text>
            <Text>
              {item.show_order}) {item.lessson}
            </Text>

            <Text style={{ marginTop: 5, fontSize: 10 }}>
              {item.video_add_date}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default CourseList;

const styles = StyleSheet.create({});
