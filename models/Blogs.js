const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const BlogsSchema = new Schema({
  language: {
    type: String,
    required: true
  },
  category:{
    type: String,
    default:""
  },
  date: {
    type: Date,
    default: Date.now
  },
  draft: {
    type:Boolean,
    default:false,
  },
  data: {
    title:{
        type:String,
        default:''
    },
    description:{
        type:String,
        default:''
    },
    topImg:{
        type:String,
        default:''
    },
    topId:{
      type:String,
      default:''
    },
    text:{
        type:Array,
        default:undefined
    },
    imgUrl:{
        type:Array,
        default:undefined
    },
    imgId:{
      type:Array,
      default:undefined
  },
    bold:{
        type:Array,
        default:undefined
    },
    linkTo:{
        type:Array,
        default:undefined
    },
    youtube:{
      type:Array,
      default:undefined
  },
    writter:{
        type:String,
        required:true
    }
    
    
  },
 
});
module.exports = Blogs = mongoose.model("blog", BlogsSchema);
