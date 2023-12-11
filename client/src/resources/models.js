class Activity {
  constructor(data) {
    this.id = data.id;
    this.resourceType = data.resource_type.toUpperCase();
    this.score = data.score;
    this.possibleScore = data.possible_score;
    this.product = data.product;
    this.createdDate = new Date(data.d_created * 1000)
    this.month = this.createdDate.toLocaleString('en', {month: "long"})
    this.year = this.createdDate.getFullYear()
    this.topicData = {name: data.topic_data.name, iconPath: data.topic_data.icon_path}
    this.name = data.name;
    this.iconPath = data.icon_path
    this.comment = data.comment;
    this.displayTitle = this.snakeCaseToCapitalized(`${data.topic_data.name}_${data.resource_type}`)
    this.hidden = false;
    this.hasScore = false;
    this.hasZoom = false;
  }

  snakeCaseToCapitalized(str) {
    return str
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}

class ScoreZoom extends Activity {
  constructor(data) {
    super(data);
    this.hasScore = true;
    this.hasZoom = true;
  }
}

class Zoom extends Activity {
  constructor(data) {
    super(data);
    this.hasZoom = true;
  }
}


export {Zoom, Activity, ScoreZoom}
