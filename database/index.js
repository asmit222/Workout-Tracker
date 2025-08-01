const mysql = require("mysql2");

// Parse Railway connection string
let url = process.env.MYSQL_URL || "";
if (url.startsWith("mysql://")) {
  url = url.replace(/^mysql:\/\//, "mysql://"); // mysql2 supports mysql://
}

// Create pool
const pool = mysql.createPool(url + "?connectionLimit=10").promise();

// Query helper
const query = async (sql, params = []) => {
  try {
    const [rows] = await pool.query(sql, params);
    return rows;
  } catch (err) {
    console.error("DB Query Error:", err);
    throw err;
  }
};

// ======================== FUNCTIONS ========================

const saveWorkout = async function (data, callback) {
  console.log("saving final version of workout");
  try {
    const dataStr = JSON.stringify(data);
    if (
      dataStr.split(",")[4].slice(0, dataStr.split(",")[4].length - 9) ===
      "354634563dfghdfgh439003235"
    ) {
      let dataSplit = dataStr.split(",");
      let date = dataSplit[0].slice(2).split(" ").slice(1, 4).join(" ");
      let name = dataSplit[1];
      let miles = dataSplit[2];
      let minutes = dataSplit[3];
      let runCode = "354634563dfghdfgh439003235";

      await query(
        `INSERT INTO workout1 (name, workoutPlan, workoutDate, workout1, workout2)
                   VALUES (?, ?, ?, ?, ?)`,
        [name, runCode, date, miles, minutes]
      );
      console.log("run saved in workout table!");
    } else {
      let dataSplit = data.split(",");
      let name = dataSplit[51];
      let date = dataSplit[0].slice(2).split(" ").slice(1, 4).join(" ");
      let workouts = [];
      for (let i = 1; i <= 49; i += 7) workouts.push(dataSplit.slice(i, i + 7));
      let notes = dataSplit[50];
      let day = JSON.stringify(
        dataSplit[53].slice(0, dataSplit[53].length - 2)
      );

      let color;
      let templates = await query(
        `SELECT * FROM templates WHERE templateName = ?`,
        [day]
      );
      if (templates[0]) color = templates[0].color;

      await query(
        `INSERT IGNORE INTO workout1
                   (name, workoutPlan, workoutDate, workout1, workout2, workout3, workout4,
                    workout5, workout6, workout7, notes, color)
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [name, day, date, ...workouts, notes, color]
      );
      console.log("workout saved!");
    }
    callback && callback();
  } catch (err) {
    console.error("Error saving workout:", err);
    callback && callback(err);
  }
};

const getWorkouts = async function (data, callback) {
  try {
    let name = data.slice(2, data.length - 5).toUpperCase();
    const results = await query(`SELECT * FROM workout1 WHERE name = ?`, [
      name,
    ]);
    callback && callback(results);
  } catch (err) {
    console.error("Error getting workouts:", err);
    callback && callback(err);
  }
};

const addTemplate = async function (data, callback) {
  try {
    let dataSplit = data.split(",");
    let name = dataSplit[22].toUpperCase();
    let workoutName = JSON.stringify(
      dataSplit[24].slice(0, dataSplit[24].length - 5)
    );
    let workouts = [];
    for (let i = 0; i < 21; i += 3) workouts.push(dataSplit.slice(i, i + 3));

    await query(
      `INSERT INTO templates VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'Red')`,
      [name, workoutName, ...workouts]
    );
    console.log("template saved!");
    callback && callback();
  } catch (err) {
    console.error("Error adding template:", err);
    callback && callback(err);
  }
};

const getTemplates = async function (data, callback) {
  try {
    let name = data.slice(2, data.length - 5);
    const results = await query(`SELECT * FROM templates WHERE name = ?`, [
      name.toUpperCase(),
    ]);
    callback && callback(results);
  } catch (err) {
    console.error("Error getting templates:", err);
    callback && callback(err);
  }
};

const createAccount = async function (data, callback) {
  try {
    const dataSplit = data.split(",");
    let name = dataSplit[0].slice(2).toUpperCase();
    let password = dataSplit[1].slice(0, dataSplit[1].length - 5);

    let existing = await query(`SELECT * FROM usersAndPasses WHERE name = ?`, [
      name,
    ]);
    if (existing.length === 0) {
      await query(`INSERT INTO usersAndPasses VALUES (?, ?)`, [name, password]);
      callback && callback({ success: true });
    } else {
      callback && callback("0");
    }
  } catch (err) {
    console.error("Error creating account:", err);
    callback && callback(err);
  }
};

const attemptLogin = async function (data, callback) {
  try {
    const dataSplit = data.split(",");
    let name = dataSplit[0].slice(2).toUpperCase();
    let password = dataSplit[1].slice(0, dataSplit[1].length - 5);

    const res = await query(
      `SELECT * FROM usersAndPasses WHERE name = ? AND password = ?`,
      [name, password]
    );
    callback && callback(res);
  } catch (err) {
    console.error("Error logging in:", err);
    callback && callback(err);
  }
};

const deleteTemplate = async function (data, callback) {
  try {
    const dataSplit = JSON.stringify(data).split(",");
    const name = dataSplit[1].slice(0, dataSplit[1].length - 5);
    let template = dataSplit[0]
      .slice(4, dataSplit[0].length - 2)
      .replace(/["\\]/g, "");

    await query(`DELETE FROM templates WHERE templateName = ? AND name = ?`, [
      JSON.stringify(template),
      name,
    ]);
    callback && callback({ success: true });
  } catch (err) {
    console.error("Error deleting template:", err);
    callback && callback(err);
  }
};

const changeColor = async function (data, callback) {
  try {
    const dataSplit = JSON.stringify(data).split(",");
    let templateName = dataSplit[0].slice(4, dataSplit[0].length - 2);
    let color = dataSplit[1].slice(0, dataSplit[1].length - 5);

    await query(`UPDATE templates SET color = ? WHERE templateName = ?`, [
      color,
      `"${templateName}"`,
    ]);
    await query(`UPDATE workout1 SET color = ? WHERE workoutPlan = ?`, [
      color,
      `"${templateName}"`,
    ]);
    callback && callback({ success: true });
  } catch (err) {
    console.error("Error changing color:", err);
    callback && callback(err);
  }
};

const deleteWorkout = async function (data, callback) {
  try {
    const dataSplit = JSON.stringify(data).split(",");
    let workoutName = dataSplit[0].slice(2);
    let name = dataSplit[2];
    let id = dataSplit[1];

    if (workoutName === "Run") {
      let date = dataSplit[3];
      let miles = dataSplit[4].slice(0, dataSplit[4].length - 5);
      await query(
        `DELETE FROM runData WHERE date = ? AND name = ? AND miles = ?`,
        [date, name, miles]
      );
    }

    if (workoutName === "Run") {
      await query(`DELETE FROM workout1 WHERE id = ? AND name = ?`, [id, name]);
    } else {
      await query(
        `DELETE FROM workout1 WHERE workoutPlan = ? AND id = ? AND name = ?`,
        [`"${workoutName}"`, id, name]
      );
    }
    callback && callback({ success: true });
  } catch (err) {
    console.error("Error deleting workout:", err);
    callback && callback(err);
  }
};

const submitRun = async function (data, callback) {
  try {
    const dataSplit = JSON.stringify(data).split(",");
    let date = dataSplit[0].slice(2).split(" ").slice(1, 4).join(" ");
    let name = dataSplit[1];
    let miles = dataSplit[2];
    let minutes = dataSplit[3].slice(0, dataSplit[3].length - 5);

    await query(
      `INSERT INTO runData (name, miles, minutes, notes, date)
                 VALUES (?, ?, ?, ?, ?)`,
      [name, miles, minutes, "", date]
    );
    callback && callback({ success: true });
  } catch (err) {
    console.error("Error submitting run:", err);
    callback && callback(err);
  }
};

const getRunData = async function (data, callback) {
  try {
    let name = data.slice(2, data.length - 5).toUpperCase();
    const results = await query(`SELECT * FROM runData WHERE name = ?`, [name]);
    callback && callback(results);
  } catch (err) {
    console.error("Error getting run data:", err);
    callback && callback(err);
  }
};

const submitPR = async function (data, callback) {
  try {
    await query(
      `INSERT INTO PRTable (name, exercise, weight, reps)
                 VALUES (?, ?, ?, ?)`,
      [data.name, data.exercise, data.weight, data.reps]
    );
    callback && callback({ success: true });
  } catch (err) {
    console.error("Error submitting PR:", err);
    callback && callback(err);
  }
};

const getPRs = async function (data, callback) {
  try {
    let name = JSON.stringify(data).slice(2, JSON.stringify(data).length - 5);
    const results = await query(`SELECT * FROM PRTable WHERE name = ?`, [name]);
    callback && callback(results);
  } catch (err) {
    console.error("Error getting PRs:", err);
    callback && callback(err);
  }
};

const deletePR = async function (data, callback) {
  try {
    let id = JSON.stringify(data).slice(2, JSON.stringify(data).length - 5);
    await query(`DELETE FROM PRTable WHERE id = ?`, [id]);
    callback && callback({ success: true });
  } catch (err) {
    console.error("Error deleting PR:", err);
    callback && callback(err);
  }
};

const updatePR = async function (data, callback) {
  try {
    let row = data;
    await query(`UPDATE PRTable SET weight = ?, reps = ? WHERE id = ?`, [
      row.weight,
      row.reps,
      row.id,
    ]);
    callback && callback({ success: true });
  } catch (err) {
    console.error("Error updating PR:", err);
    callback && callback(err);
  }
};

// ======================== EXPORTS ========================
module.exports = {
  saveWorkout,
  getWorkouts,
  addTemplate,
  getTemplates,
  createAccount,
  attemptLogin,
  deleteTemplate,
  changeColor,
  deleteWorkout,
  submitRun,
  getRunData,
  submitPR,
  getPRs,
  deletePR,
  updatePR,
};
