import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Thermometer, 
  Droplets, 
  Wind, 
  Sun, 
  TrendingUp, 
  TrendingDown,
  AlertCircle
} from "lucide-react";

const mockSensorData = {
  temperature: {
    current: 28.5,
    trend: "up",
    status: "optimal",
    unit: "°C"
  },
  humidity: {
    current: 65,
    trend: "stable",
    status: "good",
    unit: "%"
  },
  soilMoisture: {
    current: 42,
    trend: "down",
    status: "needs-attention",
    unit: "%"
  },
  lightIntensity: {
    current: 85,
    trend: "up",
    status: "optimal",
    unit: "%"
  }
};

const getTrendIcon = (trend: string) => {
  switch (trend) {
    case "up":
      return <TrendingUp className="h-4 w-4 text-success" />;
    case "down":
      return <TrendingDown className="h-4 w-4 text-destructive" />;
    default:
      return <div className="h-4 w-4" />;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "optimal":
      return <Badge className="bg-success text-success-foreground">Optimal</Badge>;
    case "good":
      return <Badge variant="secondary">Good</Badge>;
    case "needs-attention":
      return <Badge className="bg-warning text-warning-foreground">Attention</Badge>;
    default:
      return <Badge variant="outline">Unknown</Badge>;
  }
};

const IoTDashboard = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real-Time Environmental Monitoring
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            IoT sensors provide continuous monitoring of crucial environmental factors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Temperature */}
          <Card className="p-6 bg-gradient-card shadow-soft hover:shadow-feature transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Thermometer className="h-6 w-6 text-primary" />
              </div>
              {getTrendIcon(mockSensorData.temperature.trend)}
            </div>
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Temperature</h3>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-2xl font-bold text-foreground">
                {mockSensorData.temperature.current}
              </span>
              <span className="text-sm text-muted-foreground">
                {mockSensorData.temperature.unit}
              </span>
            </div>
            {getStatusBadge(mockSensorData.temperature.status)}
          </Card>

          {/* Humidity */}
          <Card className="p-6 bg-gradient-card shadow-soft hover:shadow-feature transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Droplets className="h-6 w-6 text-primary" />
              </div>
              {getTrendIcon(mockSensorData.humidity.trend)}
            </div>
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Humidity</h3>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-2xl font-bold text-foreground">
                {mockSensorData.humidity.current}
              </span>
              <span className="text-sm text-muted-foreground">
                {mockSensorData.humidity.unit}
              </span>
            </div>
            {getStatusBadge(mockSensorData.humidity.status)}
          </Card>

          {/* Soil Moisture */}
          <Card className="p-6 bg-gradient-card shadow-soft hover:shadow-feature transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-warning/10 p-3 rounded-lg">
                <Wind className="h-6 w-6 text-warning" />
              </div>
              {getTrendIcon(mockSensorData.soilMoisture.trend)}
            </div>
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Soil Moisture</h3>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-2xl font-bold text-foreground">
                {mockSensorData.soilMoisture.current}
              </span>
              <span className="text-sm text-muted-foreground">
                {mockSensorData.soilMoisture.unit}
              </span>
            </div>
            {getStatusBadge(mockSensorData.soilMoisture.status)}
          </Card>

          {/* Light Intensity */}
          <Card className="p-6 bg-gradient-card shadow-soft hover:shadow-feature transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-success/10 p-3 rounded-lg">
                <Sun className="h-6 w-6 text-success" />
              </div>
              {getTrendIcon(mockSensorData.lightIntensity.trend)}
            </div>
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Light Intensity</h3>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-2xl font-bold text-foreground">
                {mockSensorData.lightIntensity.current}
              </span>
              <span className="text-sm text-muted-foreground">
                {mockSensorData.lightIntensity.unit}
              </span>
            </div>
            {getStatusBadge(mockSensorData.lightIntensity.status)}
          </Card>
        </div>

        {/* Alert Card */}
        <Card className="mt-8 p-6 bg-warning/5 border-warning/20 max-w-2xl mx-auto">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-6 w-6 text-warning flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Irrigation Recommended</h3>
              <p className="text-muted-foreground">
                Soil moisture levels are below optimal range. Consider irrigation to maintain 
                proper growing conditions for your tomato crop.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default IoTDashboard;