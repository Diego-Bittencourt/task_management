<template>
  <base-dialog :showDialog="!!changeStatus" :title="dialogTitle"></base-dialog>
  <li>
    <base-card>
      <h1>TASK: {{ taskcontent }}</h1>
      <div class="taskdata">
        <div class="column">
          <p>Sent by: {{ tasksender }}</p>
          <p>
            <base-badge :format="tasktags">{{ tasktagsUP }}</base-badge>
          </p>
        </div>
        <div class="column">
          <p @click="toggleStatus">
            <base-badge
              statusbadge
              :format="taskstatus"
              @set-status="changeTaskStatus"
              >{{ taskstatusUP }}</base-badge
            >
          </p>
        </div>
      </div>
      <p class="taskdate">Date: {{ taskdate }}</p>
      <p class="showmsg" @click="toggleMsg">
        <span v-if="!isMsgvisible">🔽 See Comments 🔽</span>
        <span v-else>🔼 Hide Comments 🔼</span>
      </p>
      <span v-if="isMsgvisible">
      <div
        class="msgwrapper"
        v-for="comment in taskcomments"
        :key="comment.name"
        :name="comment.name"
        :comment="comment.comment"
        :date="comment.date"
      >
        <p class="taskcomment"><span class="bold">{{comment.name}}:</span> {{comment.comment}}</p>
        <p class="taskdate">Commented on: {{comment.date}}</p>
      </div>
      <div class="sendcomment">
        <label for="addtaskcomment">Write a comment</label>
        <textarea id="addtaskcomment" class="commentinput" rows="3"></textarea>
        <base-button>Comment</base-button>
        </div>
      </span>
    </base-card>
  </li>
</template>

<script>
export default {
  props: [
    "tasksender",
    "taskcontent",
    "taskdate",
    "taskstatus",
    "tasktags",
    "taskId",
  ],
  emits: ["getTasks"],
  data() {
    return {
      changeStatus: false,
      dialogTitle: "Confirm change status to " + this.setStatus,
      setStatus: "",
      error: null,
      isMsgvisible: false,
    };
  },
  computed: {
    taskcomments() {
      return [
        { name: "Joao", comment: "tralala", date: "01/02/2022" },
        { name: "layana", comment: "tchulelele", date: "02/04/2022" },
      ];
    },
    taskstatusUP() {
      return this.taskstatus.toUpperCase();
    },
    tasktagsUP() {
      return this.tasktags.toUpperCase();
    },
  },
  methods: {
    toggleMsg() {
      this.isMsgvisible = !this.isMsgvisible;
    },
    async changeTaskStatus(status) {
      let task = {
        id: this.taskId,
        status: status,
      }; //create payload object

      try {
        await this.$store.dispatch("tasks/changeStatus", task);
      } catch (error) {
        this.error = error.message || "Something went wrong";
      }

      this.$emit("getTasks");
    },
  },
};
</script>

<style scoped>
.bold {
  font-weight: bold;
}

.commentinput:focus {
 outline: none;
 border-color: lightseagreen;
 background-color: rgba(114, 103, 184, 0.265);
}

.commentinput {
  resize: none;
  width: 100%;

}

.sendcomment {
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 2px solid #ccc;
}

.sendcomment * {
  display: block;
  margin-top: 0.5rem;
}

.taskcomment {
  text-align: left;
}

label {
  font-weight: bold;
  text-align: left;
}

.msgwrapper {
  border-top: 1px solid #ccc;
  margin-top: 2rem;
}

.taskdata {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2rem;
}

.column {
  text-align: left;
}

p {
  margin-top: 0.8rem;
}

.taskdate {
  color: #999;
  font-size: 1.2rem;
  margin-top: 2rem;
  text-align: right;
}

.taskdata {
  height: 7rem;
}

.showmsg {
  transition: 0.3s all ease-in;
  border-radius: 15px;
  cursor: default;
}

.showmsg:hover {
  background-color: #ccc;
  font-weight: 700;
}
</style>
