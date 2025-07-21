import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  Camera, 
  Scan, 
  AlertTriangle, 
  CheckCircle, 
  FileImage,
  Loader2 
} from "lucide-react";

const WeedDetectionModule = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [detectionResult, setDetectionResult] = useState<any>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
        setDetectionResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulate ML analysis
    setTimeout(() => {
      setDetectionResult({
        weedType: "Common Purslane (Portulaca oleracea)",
        confidence: 87,
        severity: "Medium",
        coverage: "15-20%",
        recommendations: [
          {
            method: "Mulching",
            effectiveness: "High",
            organic: true,
            description: "Apply 3-4 inch layer of organic mulch around tomato plants"
          },
          {
            method: "Hand Weeding", 
            effectiveness: "Very High",
            organic: true,
            description: "Remove weeds by hand when soil is moist, ideally after irrigation"
          },
          {
            method: "Cultivation",
            effectiveness: "Medium",
            organic: true,
            description: "Shallow cultivation to disrupt weed growth, avoid deep tillage near tomato roots"
          }
        ]
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <section id="weed-control" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI-Powered Weed Detection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload field images for instant weed identification and organic treatment recommendations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Upload Section */}
          <Card className="p-8 bg-gradient-card shadow-feature">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Upload Field Image</h3>
            
            <div className="space-y-6">
              {!selectedImage ? (
                <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary/50 transition-colors">
                  <div className="mb-4">
                    <FileImage className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-lg font-medium text-foreground mb-2">
                      Drop your field image here
                    </p>
                    <p className="text-muted-foreground">
                      Or click to browse your files
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button variant="feature" className="relative">
                      <Upload className="h-4 w-4" />
                      Upload Image
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                    </Button>
                    <Button variant="outline">
                      <Camera className="h-4 w-4" />
                      Take Photo
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="relative rounded-lg overflow-hidden">
                    <img 
                      src={selectedImage} 
                      alt="Uploaded field image" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="hero" 
                      onClick={handleAnalyze}
                      disabled={isAnalyzing}
                      className="flex-1"
                    >
                      {isAnalyzing ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Scan className="h-4 w-4" />
                      )}
                      {isAnalyzing ? "Analyzing..." : "Analyze Image"}
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setSelectedImage(null);
                        setDetectionResult(null);
                      }}
                    >
                      Reset
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Results Section */}
          <Card className="p-8 bg-gradient-card shadow-feature">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Detection Results</h3>
            
            {!detectionResult ? (
              <div className="text-center py-12">
                <Scan className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg text-muted-foreground">
                  Upload an image to see AI analysis results
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Detection Summary */}
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertTriangle className="h-5 w-5 text-warning" />
                    <h4 className="font-semibold text-foreground">Weed Detected</h4>
                  </div>
                  <p className="text-lg font-medium text-foreground mb-2">
                    {detectionResult.weedType}
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    <Badge variant="secondary">
                      {detectionResult.confidence}% Confidence
                    </Badge>
                    <Badge variant="outline">
                      {detectionResult.severity} Severity
                    </Badge>
                    <Badge variant="outline">
                      {detectionResult.coverage} Coverage
                    </Badge>
                  </div>
                </div>

                {/* Recommendations */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4">
                    Organic Treatment Recommendations
                  </h4>
                  <div className="space-y-4">
                    {detectionResult.recommendations.map((rec: any, index: number) => (
                      <div key={index} className="border border-border rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          <span className="font-medium text-foreground">{rec.method}</span>
                          <Badge variant="secondary" className="text-xs">
                            {rec.effectiveness} Effectiveness
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {rec.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="success" className="w-full">
                  Log Treatment Action
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WeedDetectionModule;