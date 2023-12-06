import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "MotionEvents")
public class MotionEvents {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "DetectionTime")
    private Date detectionTime;

    @Column(name = "SerialNumber")
    private Integer serialNumber;

    // Getter와 Setter ...
}