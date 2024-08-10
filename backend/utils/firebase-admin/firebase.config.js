const admin = require("firebase-admin");

// const SERVICE_ACCOUNT_FILE_PATH = "../../solvative-assessment-firebase.json"; /

// Initializing firebase admin application:
admin.initializeApp({
  credential: admin.credential.cert({
    type: "service_account",
    project_id: "solvative-assessment",
    private_key_id: "7cb9f2d18acefac359f9c22f5228549856af62fa",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC9v7vYl66j+Jjb\nLs+glC2J86IW3MRe1s+6N7etOOrHn8+cWt42WOwjbjSPa2N44TZJ+hwB00hfX01w\n3RNzzJAs9BzuwXcTYhQMsMwAESf2q6toUzSFMmZs14zkkNsah4g9RUOJ3nWjzxNg\nM3AScKgnuOYGqGs03tpaM27DF5WfsuVgUKxQb0y5h9MSM39gvsQyA9f3u4bW1rdF\nG95SHoQlX9Q+tgFIuJNUZUQ6q20juvPlmMRBFGVsYQW5W22MeK9zQLmjT2+58Klr\nsoY1V5LmPyx3Y+MiLisl+hAqjjIDsrZO/MmiMMSzaNV6LBKzW+oAj4zWBrFvrssI\nP74n2my9AgMBAAECggEAHH3rljaSg+8afsD87ssJOn9xnZa5StddGkRvCWz0PhTm\nXv87AjSggqJz9Hwm09oXZYzPg0unQKDmFzYvC1KSbJmcNZKpz2iJA63ReAobctvs\nsU3bI0wB2sKUFqcUq1tiDvc1UMCtb/MyYN3gbHhrm4lVSvcjn+z9oxE5hsRmFHRN\nYbnWxCYvD8XCfoGJG1vcMVtGoJ66DwgBxA6PcMnYZ8k+q7cGxN4qTBX/qQaos6A8\nRPVlboTOokjZSvY+4ITFLdE4GIabeOTQq3Z+brqQUC7AdhTQoKgoNBxhw3VzAUEx\nGJwcxYXL83iDAqdvWdv/NzVFSRqOfG6/EEc/lgrakQKBgQDmSeDmvAo0zDHDdTEQ\noP1yXs1HGagMR89/c2ZSz4UbxF8FaZ+tBH4VbwPK99l3zwFS7uJwJ2CizXilp4Xe\nIxhtT0DZBpszrugY0ansj66jwRCo3v0C1LdT3VpZIHlhclDjmfdtIFUJiNift7sv\nwoYaFan4O2817UOwOOJ6jDBxkQKBgQDS7yY5H1T6iDeBvM+prj3tOoyWydc87+qq\niLK3SiQNYlHI9fAo/piyvMwbNlaHFN/srFiaGBHw4n5GJr+quEEEPm7D+HUmZIcx\ntsFvMUj+DtpuodTTm72DKoKYZGdijgIWgWc3luiaNKoRlRYkXZKEjiz/EGbICYfO\nGYrbjm/ybQKBgQCmngNbzedwheDnc04ZovFdI5xQeg6tO/O0WhFJjx3WlkDN0LsX\n2q1C4rySyLqORbbGg1JQJR11DUbiTA++RhQxWmsn2vDF9yG0e1X/c4G+tzxPgm76\n8l7mDbyFycooqCZAVrC/Qupj6KAbBzsm9g5CpzQABziSguU7hhzO38lZEQKBgEQp\nl9Z5s4JKJnW8R/bzIXvZobjQfMdqWBDHn8jvIntYvEkOgI8exsVrkSFyC8AXFM1s\nXC1ffdyztE6DEwjeBdSTQEP/tAu2DKIaBqQh7w56SkfZ7+Z5u2H5iL4qI+aLMU2I\nf4xNLdk3D4YjAUa7Hi/Lqeq6qBwYSFRnmKGeg7p5AoGAawU8TjMOMKRPWYqRpZO2\naJNp/RYif1TUhJpXwZOaDO0XNcEbTUkUQI4ChJrhEqmrXoEfRM5GYhMJZ+hmlEtb\ngk5WMpwSu4xExmyTEl66+rkr9e3jPaQFyBmv0vjkJR+O7ctjB5eDMfsN4q99g2b4\nmulG0WwpfrKRJwPtddAUx5g=\n-----END PRIVATE KEY-----\n",
    client_email:
      "firebase-adminsdk-meisw@solvative-assessment.iam.gserviceaccount.com",
    client_id: "111494645682432925380",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-meisw%40solvative-assessment.iam.gserviceaccount.com",
    universe_domain: "googleapis.com",
  }),
});
exports.firestoreDB = admin.firestore();
